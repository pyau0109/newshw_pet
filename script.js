/* --- 純手工 SVG 像素圖示庫 --- */
const petArt = {
    cat: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges; width:100%; height:100%;"><path fill="#F39C12" d="M2 7h9v5H2zM8 4h5v4H8zM9 2h1v2H9zM12 2h1v2h-1zM1 5h1v4H1zM3 12h1v3H3zM5 12h1v3H5zM8 12h1v3H8zM10 12h1v3h-1z"/><rect x="11" y="5" width="1" height="1" fill="#000"/></svg>',
    dog: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges; width:100%; height:100%;"><path fill="#D35400" d="M2 7h9v5H2zM9 3h5v5H9z"/><path fill="#873600" d="M10 3h2v3h-2zM3 12h1v3H3zM5 12h1v3H5zM8 12h1v3H8zM10 12h1v3h-1zM1 5h1v3H1z"/><rect x="12" y="4" width="1" height="1" fill="#000"/><rect x="14" y="5" width="2" height="1" fill="#D35400"/><rect x="15" y="4" width="1" height="1" fill="#000"/></svg>'
};

const taskIcons = {
    catSand: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#5C4033" d="M7 5h2v2h2v2h2v3H3v-3h2V7h2V5z"/></svg>',
    vomit: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#8FCE00" d="M5 6h6v2h2v5H3v-5h2z"/></svg>',
    toy: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#999" d="M4 7h7v4H4z"/><path fill="#FFB6C1" d="M11 7h2v4h-2z"/><rect x="3" y="9" width="1" height="1" fill="#555"/></svg>',
    scratch: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#D4A373" d="M6 1h4v12H6z"/><path fill="#FAEDCD" d="M4 13h8v2H4z"/></svg>',
    sofa: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#E07A5F" d="M3 6h10v7H3z"/><path fill="#3D405B" d="M2 4h2v9H2zM12 4h2v9h-2z"/></svg>',
    school: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#3D405B" d="M8 2l6 3-6 3-6-3z"/><path fill="#3D405B" d="M6 7v4h4V7z"/><rect x="13" y="5" width="1" height="4" fill="#F4A261"/></svg>',
    ball: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><circle cx="8" cy="8" r="6" fill="#D4E157"/></svg>',
    poop: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#5C4033" d="M7 5h2v2h2v2h2v3H3v-3h2V7h2V5z"/></svg>',
    leash: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="none" stroke="#E07A5F" stroke-width="2" d="M3 3h4v8H3z"/><rect x="6" y="11" width="4" height="3" fill="#333"/></svg>',
    fight: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#D35400" d="M3 4h4v5H3z"/><path fill="#555" d="M9 7h4v5H9z"/></svg>',
    walkSwitch: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#F4A261" d="M6 2h4v3H6z"/><path fill="#2A9D8F" d="M5 5h6v4H5z"/><path fill="#264653" d="M5 9h2v5H5zM9 9h2v5H9z"/></svg>',
    homeSwitch: '<svg viewBox="0 0 16 16" style="shape-rendering:crispEdges;width:32px;height:32px;"><path fill="#E76F51" d="M8 1l6 6H2z"/><path fill="#F4A261" d="M4 7h8v8H4z"/></svg>'
};

/* --- 遊戲資料設定 --- */
const catTasks = [
    { text: "剷貓砂", icon: taskIcons.catSand, reason: "貓砂太臭，鄰居抗議異味！" },
    { text: "清嘔吐物", icon: taskIcons.vomit, reason: "貓咪吃太快吐了，弄壞房東地毯！" },
    { text: "收玩具", icon: taskIcons.toy, reason: "半夜玩玩具發出噪音，樓下鄰居報警！" },
    { text: "放置抓板", icon: taskIcons.scratch, reason: "貓咪無聊，抓爛了高級沙發！" },
    { text: "防抓措施", icon: taskIcons.sofa, reason: "未做防護，房東的木製家具被破壞！" }
];

const dogHomeTasks = [
    { text: "報名訓練", icon: taskIcons.school, reason: "狗狗狂吠，管委會收到嚴重投訴！" },
    { text: "陪狗玩耍", icon: taskIcons.ball, reason: "狗狗精力無處發洩，咬爛了房租設備！" },
    { text: "保護家具", icon: taskIcons.sofa, reason: "狗狗長牙亂啃，損壞房東的家具！" }
];

const dogWalkTasks = [
    { text: "清理大便", icon: taskIcons.poop, reason: "未清狗便，被社區監視器拍下罰款！" },
    { text: "幫狗牽繩", icon: taskIcons.leash, reason: "未繫牽繩嚇到鄰居小孩，引發糾紛！" },
    { text: "阻止打架", icon: taskIcons.fight, reason: "狗狗與別人的狗打架，造成社區混亂！" }
];

const dogSwitchToWalk = { text: "出門遛狗", icon: taskIcons.walkSwitch, reason: "狗狗憋不住，在家裡隨地大小便！", isSwitch: 'walk' };
const dogSwitchToHome = { text: "回家休息", icon: taskIcons.homeSwitch, reason: "在外逗留太久，狗狗中暑送醫！", isSwitch: 'home' };

/* --- 遊戲變數 --- */
let petType = '';
let score = 0;
let currentScene = 'home';
let spawnTimer = null;
let sceneTimer = null;
let countdownInterval = null;
let spawnRate = 2500;
let warningActive = false;
let warningSeconds = 5;

/* --- 核心邏輯 --- */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        if (screenId === 'play-screen' && s.id === 'play-screen') {
            s.classList.add('transparent-bg');
        } else {
            s.classList.remove('transparent-bg');
        }
    });
    document.getElementById(screenId).classList.add('active');
}

function selectPet(type) {
    petType = type;
    showScreen('agreement-screen');
}

function startGame() {
    score = 0;
    currentScene = 'home';
    spawnRate = 2500;
    warningActive = false;
    document.getElementById('score').innerText = score;
    document.getElementById('task-container').innerHTML = '';
    
    // 注入寵物像素畫
    document.getElementById('pet-character').innerHTML = petType === 'cat' ? petArt.cat : petArt.dog;
    
    updateSceneUI();
    showScreen('play-screen');
    scheduleNextTask();

    if (petType === 'dog') scheduleSceneSwitch();
}

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

function scheduleSceneSwitch() {
    if (petType !== 'dog') return;
    let delay = Math.floor(Math.random() * 10000) + 15000; 
    sceneTimer = setTimeout(() => {
        let switchTask = currentScene === 'home' ? dogSwitchToWalk : dogSwitchToHome;
        createTaskElement(switchTask);
        checkGameStatus();
        scheduleSceneSwitch();
    }, delay);
}

function createTaskElement(taskDef) {
    const container = document.getElementById('task-container');
    const taskEl = document.createElement('div');
    taskEl.className = 'task-item';
    taskEl.innerHTML = `<div>${taskDef.icon}</div><div>${taskDef.text}</div>`;
    
    taskEl.dataset.reason = taskDef.reason;
    if (taskDef.isSwitch) taskEl.dataset.switch = taskDef.isSwitch;

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
            document.getElementById('task-container').innerHTML = ''; 
            updateSceneUI();
        }
        checkGameStatus();
    };
    container.appendChild(taskEl);
}

function updateSceneUI() {
    const bgEl = document.getElementById('scene-background');
    const statusIcon = document.getElementById('status-icon');
    const petEl = document.getElementById('pet-character');
    const decor = document.querySelector('.home-decor');
    
    petEl.className = '';
    bgEl.className = '';
    
    if (petType === 'cat' || currentScene === 'home') {
        bgEl.classList.add('home-bg');
        decor.style.display = 'block';
        statusIcon.innerText = petType === 'cat' ? '[貓咪宅在家]' : '[狗狗在家]';
        petEl.classList.add('anim-wander');
    } else {
        bgEl.classList.add('walk-bg');
        decor.style.display = 'none';
        statusIcon.innerText = '[狗狗散步中]';
        petEl.classList.add('anim-walk');
    }
}

function checkGameStatus() {
    const tasksOnScreen = document.querySelectorAll('.task-item');
    const gameArea = document.getElementById('game-area');
    const warningDisplay = document.getElementById('warning-timer');

    if (tasksOnScreen.length >= 3) {
        if (!warningActive) {
            warningActive = true;
            warningSeconds = 5;
            gameArea.classList.add('warning-mode');
            warningDisplay.innerText = warningSeconds;
            warningDisplay.style.display = 'block';
            countdownInterval = setInterval(() => {
                warningSeconds--;
                warningDisplay.innerText = warningSeconds;
                if (warningSeconds <= 0) gameOver();
            }, 1000);
        }
    } else if (warningActive) {
        warningActive = false;
        gameArea.classList.remove('warning-mode');
        warningDisplay.style.display = 'none';
        clearInterval(countdownInterval);
    }
}

function gameOver() {
    clearTimeout(spawnTimer);
    clearTimeout(sceneTimer);
    clearInterval(countdownInterval);
    document.getElementById('game-area').classList.remove('warning-mode');
    document.getElementById('warning-timer').style.display = 'none';

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
