/* --- 遊戲資料設定 --- */
const catTasks = [
    { text: "剷貓砂", icon: "💩", reason: "貓砂太臭，鄰居抗議異味！" },
    { text: "清嘔吐物", icon: "🤮", reason: "貓咪吃太快吐了，弄壞房東地毯！" },
    { text: "收起玩具", icon: "🐁", reason: "半夜玩玩具發出噪音，樓下鄰居報警！" },
    { text: "放置抓板", icon: "🪵", reason: "貓咪無聊，抓爛了高級沙發！" },
    { text: "防抓措施", icon: "🛋️", reason: "未做防護，房東的木製家具被破壞！" }
];

const dogHomeTasks = [
    { text: "報名訓練", icon: "🎓", reason: "狗狗狂吠，管委會收到嚴重投訴！" },
    { text: "陪狗玩耍", icon: "🎾", reason: "狗狗精力無處發洩，咬爛了房租設備！" },
    { text: "保護家具", icon: "🛋️", reason: "狗狗長牙亂啃，損壞房東的家具！" }
];

const dogWalkTasks = [
    { text: "清理大便", icon: "💩", reason: "未清狗便，被社區監視器拍下罰款！" },
    { text: "幫狗牽繩", icon: "🪢", reason: "未繫牽繩嚇到鄰居小孩，引發糾紛！" },
    { text: "阻止打架", icon: "🐕‍🦺", reason: "狗狗與別人的狗打架，造成社區混亂！" }
];

const dogSwitchToWalk = { text: "出門遛狗", icon: "🦮", reason: "狗狗憋不住，在家裡隨地大小便！", isSwitch: 'walk' };
const dogSwitchToHome = { text: "回家休息", icon: "🏠", reason: "在外逗留太久，狗狗中暑送醫！", isSwitch: 'home' };

/* --- 遊戲狀態變數 --- */
let petType = '';
let score = 0;
let currentScene = 'home'; // 'home' 或 'walk'

let spawnTimer = null;
let sceneTimer = null;
let countdownInterval = null;

let spawnRate = 2500;
let warningActive = false;
let warningSeconds = 10;

/* --- 介面切換函數 --- */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        // 遊戲畫面背景要透明，露出底下的場景
        if (screenId === 'play-screen' && s.id === 'play-screen') {
            s.classList.add('transparent-bg');
        } else {
            s.classList.remove('transparent-bg');
        }
    });
    document.getElementById(screenId).classList.add('active');
}

/* --- 遊戲初始化邏輯 --- */
function selectPet(type) {
    petType = type;
    const icon = type === 'cat' ? '🐈 貓咪' : '🐕 狗狗';
    document.getElementById('selected-pet-icon').innerText = icon;
    showScreen('agreement-screen');
}

function startGame() {
    score = 0;
    currentScene = 'home';
    spawnRate = 2500;
    warningActive = false;
    document.getElementById('score').innerText = score;
    document.getElementById('task-container').innerHTML = '';
    
    // 設定寵物圖示與動畫
    const petEl = document.getElementById('pet-character');
    petEl.innerText = petType === 'cat' ? '🐈' : '🐕';
    
    updateSceneUI();
    showScreen('play-screen');
    
    // 啟動任務生成
    scheduleNextTask();

    // 狗狗切換場景機制
    if (petType === 'dog') {
        scheduleSceneSwitch();
    }
}

/* --- 任務生成機制 --- */
function scheduleNextTask() {
    spawnRate = Math.max(800, 2500 - Math.floor(score / 20) * 150);
    spawnTimer = setTimeout(() => {
        spawnTask();
        scheduleNextTask();
    }, spawnRate);
}

function spawnTask() {
    let taskList = catTasks;
    if (petType === 'dog') {
        taskList = currentScene === 'home' ? dogHomeTasks : dogWalkTasks;
    }
    let taskDef = taskList[Math.floor(Math.random() * taskList.length)];
    createTaskElement(taskDef);
    checkGameStatus();
}

// 狗狗專屬：排程場景切換任務 (15~25秒出現)
function scheduleSceneSwitch() {
    if (petType !== 'dog') return;
    let delay = Math.floor(Math.random() * 10000) + 15000; 
    
    sceneTimer = setTimeout(() => {
        let switchTask = currentScene === 'home' ? dogSwitchToWalk : dogSwitchToHome;
        createTaskElement(switchTask);
        checkGameStatus();
        scheduleSceneSwitch(); // 繼續排下一次
    }, delay);
}

function createTaskElement(taskDef) {
    const container = document.getElementById('task-container');
    const taskEl = document.createElement('div');
    taskEl.className = 'task-item';
    
    taskEl.innerHTML = `
        <div class="icon">${taskDef.icon}</div>
        <div>${taskDef.text}</div>
    `;
    
    taskEl.dataset.reason = taskDef.reason;
    if (taskDef.isSwitch) taskEl.dataset.switch = taskDef.isSwitch;

    // 隨機位置 (避開頂部 UI 與底部寵物)
    const topPos = Math.floor(Math.random() * 50) + 15; 
    const leftPos = Math.floor(Math.random() * 65) + 5;
    taskEl.style.top = topPos + '%';
    taskEl.style.left = leftPos + '%';

    taskEl.onclick = function() {
        taskEl.remove();
        score += 10;
        document.getElementById('score').innerText = score;
        
        if (taskDef.isSwitch) {
            currentScene = taskDef.isSwitch;
            // 切換場景時，為了合理性，清除上一個場景的舊任務
            document.getElementById('task-container').innerHTML = ''; 
            updateSceneUI();
        }
        checkGameStatus();
    };

    container.appendChild(taskEl);
}

/* --- 場景與動畫更新 --- */
function updateSceneUI() {
    const bgEl = document.getElementById('scene-background');
    const statusIcon = document.getElementById('status-icon');
    const petEl = document.getElementById('pet-character');
    const decor = document.querySelector('.home-decor');
    
    // 清除舊動畫與背景類別
    petEl.className = '';
    bgEl.className = '';
    
    if (petType === 'cat') {
        bgEl.classList.add('home-bg');
        decor.style.display = 'block';
        statusIcon.innerText = '🏠 貓咪宅在家';
        petEl.classList.add('anim-wander');
    } else {
        if (currentScene === 'home') {
            bgEl.classList.add('home-bg');
            decor.style.display = 'block';
            statusIcon.innerText = '🏠 狗狗在家';
            petEl.classList.add('anim-wander');
        } else {
            bgEl.classList.add('walk-bg');
            decor.style.display = 'none';
            statusIcon.innerText = '🌳 狗狗散步中';
            petEl.classList.add('anim-walk');
        }
    }
}

/* --- 失敗判定邏輯 --- */
function checkGameStatus() {
    const tasksOnScreen = document.querySelectorAll('.task-item');
    const gameArea = document.getElementById('game-area');
    const warningDisplay = document.getElementById('warning-timer');

    if (tasksOnScreen.length >= 3) {
        if (!warningActive) {
            warningActive = true;
            warningSeconds = 10;
            gameArea.classList.add('warning-mode');
            warningDisplay.innerText = warningSeconds;
            warningDisplay.style.display = 'block';

            countdownInterval = setInterval(() => {
                warningSeconds--;
                warningDisplay.innerText = warningSeconds;
                if (warningSeconds <= 0) gameOver();
            }, 1000);
        }
    } else {
        if (warningActive) {
            warningActive = false;
            gameArea.classList.remove('warning-mode');
            warningDisplay.style.display = 'none';
            clearInterval(countdownInterval);
        }
    }
}

function gameOver() {
    clearTimeout(spawnTimer);
    clearTimeout(sceneTimer);
    clearInterval(countdownInterval);
    
    document.getElementById('game-area').classList.remove('warning-mode');
    document.getElementById('warning-timer').style.display = 'none';

    // 記錄死因
    const tasksOnScreen = document.querySelectorAll('.task-item');
    const reasonsSet = new Set();
    tasksOnScreen.forEach(task => reasonsSet.add(task.dataset.reason));

    document.getElementById('final-score').innerText = score;
    const reasonsList = document.getElementById('failure-reasons');
    reasonsList.innerHTML = '';
    reasonsSet.forEach(reason => {
        const li = document.createElement('li');
        li.innerText = reason;
        reasonsList.appendChild(li);
    });

    showScreen('game-over-screen');
}

function resetToStart() {
    showScreen('start-screen');
}