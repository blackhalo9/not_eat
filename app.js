// app.js

// --- 데이터 ---
const categories = [
    { id: "chicken", name: "치킨", averagePrice: 22000, averageCalories: 1800, icon: "🍗" },
    { id: "pizza", name: "피자", averagePrice: 26000, averageCalories: 2100, icon: "🍕" },
    { id: "bunsik", name: "분식", averagePrice: 15000, averageCalories: 1200, icon: "떡" },
    { id: "chinese", name: "중식", averagePrice: 18000, averageCalories: 1500, icon: "🍜" },
    { id: "soup", name: "국밥", averagePrice: 10000, averageCalories: 800, icon: "🍲" },
    { id: "burger", name: "햄버거", averagePrice: 12000, averageCalories: 1000, icon: "🍔" },
    { id: "night", name: "야식", averagePrice: 25000, averageCalories: 1600, icon: "🌙" },
    { id: "dessert", name: "디저트", averagePrice: 14000, averageCalories: 900, icon: "🍰" }
];

const stores = [
    // 치킨
    { id: "c1", categoryId: "chicken", name: "밤새치킨", rating: 4.8, reviewCount: 1248, deliveryTime: "35~45분", menuName: "바삭 후라이드 치킨", price: 20000, calories: 1850, deliveryFee: 3000 },
    { id: "c2", categoryId: "chicken", name: "행복양념치킨", rating: 4.9, reviewCount: 852, deliveryTime: "40~50분", menuName: "달콤 양념 치킨", price: 22000, calories: 1950, deliveryFee: 2000 },
    { id: "c3", categoryId: "chicken", name: "마늘간장파닭", rating: 4.7, reviewCount: 520, deliveryTime: "30~40분", menuName: "단짠 간장 치킨", price: 21000, calories: 1900, deliveryFee: 3000 },
    // 피자
    { id: "p1", categoryId: "pizza", name: "상상피자", rating: 4.9, reviewCount: 2100, deliveryTime: "40~55분", menuName: "치즈 폭탄 피자", price: 25000, calories: 2200, deliveryFee: 2000 },
    { id: "p2", categoryId: "pizza", name: "화덕장인", rating: 4.6, reviewCount: 430, deliveryTime: "45~60분", menuName: "마르게리따 피자", price: 23000, calories: 1600, deliveryFee: 4000 },
    { id: "p3", categoryId: "pizza", name: "토핑가득", rating: 4.8, reviewCount: 980, deliveryTime: "35~50분", menuName: "슈퍼 콤비네이션", price: 27000, calories: 2400, deliveryFee: 3000 },
    // 분식
    { id: "b1", categoryId: "bunsik", name: "행복분식", rating: 4.7, reviewCount: 1540, deliveryTime: "25~35분", menuName: "매운 떡볶이", price: 14000, calories: 1100, deliveryFee: 2500 },
    { id: "b2", categoryId: "bunsik", name: "튀김의달인", rating: 4.8, reviewCount: 760, deliveryTime: "30~45분", menuName: "모듬 튀김 세트", price: 16000, calories: 1500, deliveryFee: 3000 },
    { id: "b3", categoryId: "bunsik", name: "김밥천재", rating: 4.5, reviewCount: 2200, deliveryTime: "20~30분", menuName: "참치김밥+라볶이", price: 12000, calories: 1300, deliveryFee: 2000 },
    // 중식
    { id: "ch1", categoryId: "chinese", name: "불맛반점", rating: 4.8, reviewCount: 1890, deliveryTime: "20~35분", menuName: "해물 짬뽕", price: 10000, calories: 950, deliveryFee: 2000 },
    { id: "ch2", categoryId: "chinese", name: "바삭탕수육", rating: 4.9, reviewCount: 1120, deliveryTime: "30~40분", menuName: "찹쌀 탕수육", price: 20000, calories: 1600, deliveryFee: 3000 },
    { id: "ch3", categoryId: "chinese", name: "짜장마을", rating: 4.6, reviewCount: 840, deliveryTime: "25~35분", menuName: "간짜장 곱빼기", price: 9000, calories: 1100, deliveryFee: 2000 },
    // 국밥
    { id: "s1", categoryId: "soup", name: "든든국밥", rating: 4.9, reviewCount: 3100, deliveryTime: "20~30분", menuName: "진한 돼지국밥", price: 9000, calories: 750, deliveryFee: 3000 },
    { id: "s2", categoryId: "soup", name: "얼큰순대", rating: 4.8, reviewCount: 1450, deliveryTime: "25~35분", menuName: "얼큰 순대국", price: 10000, calories: 820, deliveryFee: 2000 },
    { id: "s3", categoryId: "soup", name: "가마솥해장", rating: 4.7, reviewCount: 890, deliveryTime: "30~40분", menuName: "뼈해장국", price: 11000, calories: 900, deliveryFee: 3500 },
    // 햄버거
    { id: "h1", categoryId: "burger", name: "수제버거랩", rating: 4.8, reviewCount: 670, deliveryTime: "35~45분", menuName: "더블 치즈 버거", price: 11000, calories: 1050, deliveryFee: 3000 },
    { id: "h2", categoryId: "burger", name: "빅패티", rating: 4.6, reviewCount: 1200, deliveryTime: "25~40분", menuName: "베이컨 토마토 버거", price: 9500, calories: 880, deliveryFee: 2000 },
    { id: "h3", categoryId: "burger", name: "바삭치킨버거", rating: 4.9, reviewCount: 2300, deliveryTime: "30~45분", menuName: "스파이시 치킨 버거", price: 8500, calories: 920, deliveryFee: 2500 },
    // 야식
    { id: "n1", categoryId: "night", name: "매운발자국", rating: 4.8, reviewCount: 1100, deliveryTime: "40~55분", menuName: "직화 불족발", price: 32000, calories: 2100, deliveryFee: 3000 },
    { id: "n2", categoryId: "night", name: "야시장곱창", rating: 4.7, reviewCount: 890, deliveryTime: "35~50분", menuName: "야채 곱창 볶음", price: 24000, calories: 1600, deliveryFee: 3000 },
    { id: "n3", categoryId: "night", name: "보쌈의정석", rating: 4.9, reviewCount: 1560, deliveryTime: "45~60분", menuName: "마늘 보쌈", price: 35000, calories: 1800, deliveryFee: 4000 },
    // 디저트
    { id: "d1", categoryId: "dessert", name: "달콤베이커리", rating: 4.9, reviewCount: 2400, deliveryTime: "20~35분", menuName: "생크림 케이크 조각", price: 7500, calories: 600, deliveryFee: 3000 },
    { id: "d2", categoryId: "dessert", name: "크로플하우스", rating: 4.8, reviewCount: 1300, deliveryTime: "25~40분", menuName: "브라운치즈 크로플", price: 9000, calories: 850, deliveryFee: 2500 },
    { id: "d3", categoryId: "dessert", name: "시원한빙수", rating: 4.7, reviewCount: 980, deliveryTime: "30~45분", menuName: "인절미 팥빙수", price: 13000, calories: 1050, deliveryFee: 3000 }
];

const optionData = {
    spice: [
        { label: "순한맛", price: 0, cal: 0 },
        { label: "보통", price: 0, cal: 0 },
        { label: "매운맛", price: 500, cal: 10 }
    ],
    size: [
        { label: "기본", price: 0, cal: 0 },
        { label: "곱빼기", price: 2000, cal: 400 }
    ],
    side: [
        { label: "없음", price: 0, cal: 0 },
        { label: "음료 추가", price: 2000, cal: 150 },
        { label: "사이드 메뉴", price: 4000, cal: 350 }
    ]
};

const progressSteps = [
    { text: "주문 접수 중...", desc: "“이 주문은 실제로 만들지 않아도 됩니다.”" },
    { text: "사장님이 고민 중...", desc: "“오, 오늘 매출 안 올라도 괜찮아!”" },
    { text: "조리하는 척하는 중...", desc: "“지글지글... 소리만 납니다.”" },
    { text: "라이더가 배정된 척하는 중...", desc: "“라이더님도 집에서 쉬고 계십니다.”" },
    { text: "배달 오는 척하는 중...", desc: "“오토바이 소리는 환청입니다.”" },
    { text: "갑자기 깨달음 도착!", desc: "“아, 나 오늘 돈 굳었네?”" }
];

// --- 상태 관리 ---
const state = {
    screen: 'landing', // landing, category, storeList, menuDetail, progress, result
    selectedCategoryId: null,
    selectedStoreId: null,
    quantity: 1,
    options: {
        spice: 1, // index of optionData
        size: 0,
        side: 0
    },
    isProgressing: false,
    savedData: {
        money: 0,
        cal: 0
    }
};

// --- 로컬 스토리지 관리 ---
function initStorage() {
    const today = new Date().toISOString().split('T')[0];
    const lastSavedDate = localStorage.getItem('lastSavedDate');
    
    if (lastSavedDate !== today) {
        localStorage.setItem('todaySuccessCount', '0');
        localStorage.setItem('lastSavedDate', today);
    }

    if (!localStorage.getItem('totalSavedMoney')) localStorage.setItem('totalSavedMoney', '0');
    if (!localStorage.getItem('totalSavedCalories')) localStorage.setItem('totalSavedCalories', '0');
    if (!localStorage.getItem('successCount')) localStorage.setItem('successCount', '0');
}

function saveResult(money, calories) {
    let totalMoney = parseInt(localStorage.getItem('totalSavedMoney') || '0') + money;
    let totalCal = parseInt(localStorage.getItem('totalSavedCalories') || '0') + calories;
    let successCount = parseInt(localStorage.getItem('successCount') || '0') + 1;
    let todaySuccessCount = parseInt(localStorage.getItem('todaySuccessCount') || '0') + 1;

    localStorage.setItem('totalSavedMoney', totalMoney.toString());
    localStorage.setItem('totalSavedCalories', totalCal.toString());
    localStorage.setItem('successCount', successCount.toString());
    localStorage.setItem('todaySuccessCount', todaySuccessCount.toString());
}

// --- 유틸 ---
function formatMoney(num) {
    return num.toLocaleString() + '원';
}
function formatCal(num) {
    return num.toLocaleString() + ' kcal';
}

function getTitleByCount(count) {
    if (count >= 10) return "배달앱 삭제 직전의 현자";
    if (count >= 5) return "냉장고 수호자";
    if (count >= 3) return "야식 방어 성공자";
    return "배달 유혹 견습생";
}

// --- 렌더링 ---
const appDiv = document.getElementById('app');

function render() {
    window.scrollTo(0, 0);
    appDiv.innerHTML = '';
    
    switch (state.screen) {
        case 'landing': renderLanding(); break;
        case 'category': renderCategory(); break;
        case 'storeList': renderStoreList(); break;
        case 'menuDetail': renderMenuDetail(); break;
        case 'progress': renderProgress(); break;
        case 'result': renderResult(); break;
    }
}

// 1. 랜딩 화면
function renderLanding() {
    appDiv.innerHTML = `
        <div class="screen landing-screen">
            <div class="landing-icon">💸</div>
            <h1>오늘은 안 시켰다</h1>
            <p class="sub-text">배달앱 켜기 전에 3분만 참아보기<br>진짜 주문은 아니지만, 욕구는 꽤 진짜처럼 지나갑니다.</p>
            <div style="flex:1;"></div>
            <button class="btn" onclick="navigate('category')">가짜 주문 시작하기</button>
            <p class="warning-text">※ 실제 결제는 발생하지 않습니다. 음식은 오지 않습니다.<br>대신 돈과 칼로리를 아낄 수 있습니다.</p>
        </div>
    `;
}

// 2. 카테고리 화면
function renderCategory() {
    let html = `
        <div class="screen">
            <header>
                <button class="back-btn" onclick="navigate('landing')">← 뒤로</button>
            </header>
            <h2>지금 뭐가 가장 먹고 싶나요?</h2>
            <div class="grid">
    `;
    
    categories.forEach(cat => {
        html += `
            <div class="card" onclick="selectCategory('${cat.id}')">
                <div style="font-size:32px; margin-bottom:8px;">${cat.icon}</div>
                <div class="card-title">${cat.name}</div>
                <div class="card-info">예상 ${formatMoney(cat.averagePrice)}<br>약 ${formatCal(cat.averageCalories)}</div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    appDiv.innerHTML = html;
}

// 3. 가게 목록 화면
function renderStoreList() {
    const cat = categories.find(c => c.id === state.selectedCategoryId);
    const storeList = stores.filter(s => s.categoryId === state.selectedCategoryId);
    
    let html = `
        <div class="screen">
            <header>
                <button class="back-btn" onclick="navigate('category')">← 뒤로</button>
                <h3 style="margin-left: 16px; font-weight:700;">${cat.name}</h3>
            </header>
            <div class="store-list">
    `;
    
    storeList.forEach(store => {
        html += `
            <div class="store-card" onclick="selectStore('${store.id}')">
                <div class="store-name">${store.name}</div>
                <div class="store-meta">★ ${store.rating} · 리뷰 ${store.reviewCount.toLocaleString()}개 · ${store.deliveryTime}</div>
                <div class="store-menu">
                    <strong>대표메뉴: ${store.menuName}</strong><br>
                    ${formatMoney(store.price)} · ${formatCal(store.calories)}
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    appDiv.innerHTML = html;
}

// 4. 메뉴 상세 화면
function renderMenuDetail() {
    const store = stores.find(s => s.id === state.selectedStoreId);
    
    // 계산
    let optionPrice = optionData.spice[state.options.spice].price + optionData.size[state.options.size].price + optionData.side[state.options.side].price;
    let optionCal = optionData.spice[state.options.spice].cal + optionData.size[state.options.size].cal + optionData.side[state.options.side].cal;
    
    let itemPrice = store.price + optionPrice;
    let itemCal = store.calories + optionCal;
    
    let totalPrice = (itemPrice * state.quantity) + store.deliveryFee;
    let totalCal = itemCal * state.quantity;
    
    // 상태에 현재 계산값 임시 저장 (결과 화면용)
    state.savedData.money = totalPrice;
    state.savedData.cal = totalCal;
    
    let html = `
        <div class="screen" style="padding-bottom:100px;">
            <header>
                <button class="back-btn" onclick="navigate('storeList')">← 뒤로</button>
            </header>
            
            <div class="menu-detail-header">
                <div class="sub-text" style="margin-bottom:4px;">${store.name}</div>
                <div class="menu-name">${store.menuName}</div>
                <div class="menu-price">${formatMoney(store.price)}</div>
                <div class="sub-text" style="margin-top:4px;">기본 ${formatCal(store.calories)}</div>
            </div>
            
            <div class="option-group">
                <div class="option-title">맵기 선택</div>
                <div class="option-labels">
                    ${optionData.spice.map((opt, i) => `
                        <label class="option-label">
                            <input type="radio" name="spice" value="${i}" ${state.options.spice === i ? 'checked' : ''} onchange="updateOption('spice', ${i})">
                            <span>${opt.label} ${opt.price>0 ? '+'+formatMoney(opt.price) : ''}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <div class="option-title">양 선택</div>
                <div class="option-labels">
                    ${optionData.size.map((opt, i) => `
                        <label class="option-label">
                            <input type="radio" name="size" value="${i}" ${state.options.size === i ? 'checked' : ''} onchange="updateOption('size', ${i})">
                            <span>${opt.label} ${opt.price>0 ? '+'+formatMoney(opt.price) : ''}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <div class="option-title">사이드 추가</div>
                <div class="option-labels">
                    ${optionData.side.map((opt, i) => `
                        <label class="option-label">
                            <input type="radio" name="side" value="${i}" ${state.options.side === i ? 'checked' : ''} onchange="updateOption('side', ${i})">
                            <span>${opt.label} ${opt.price>0 ? '+'+formatMoney(opt.price) : ''}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div class="quantity-control">
                <button class="qty-btn" onclick="changeQty(-1)">-</button>
                <div class="qty-val">${state.quantity}</div>
                <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
            
            <div class="total-price-area">
                <span>배달팁</span>
                <span>${formatMoney(store.deliveryFee)}</span>
            </div>
            <div class="total-price-area" style="border-top:none; padding-top:8px;">
                <span>총 결제 예정</span>
                <span style="color:var(--primary-color); font-size:24px;">${formatMoney(totalPrice)}</span>
            </div>
            
            <div style="position: fixed; bottom: 0; left: 0; right: 0; padding: 16px 24px 24px 24px; background: white; border-top: 1px solid var(--border-color); max-width: 480px; margin: 0 auto; box-shadow: 0 -4px 10px rgba(0,0,0,0.05); z-index: 10;">
                <button class="btn" onclick="startOrder()">가짜 주문하기</button>
                <p class="warning-text">이 주문은 욕구 해소용 가상 주문입니다.<br>실제 결제는 발생하지 않습니다.</p>
            </div>
        </div>
    `;
    appDiv.innerHTML = html;
}

// 5. 진행 화면
function renderProgress() {
    appDiv.innerHTML = `
        <div class="screen progress-screen">
            <div style="font-size:60px; margin-bottom:20px;">🛵</div>
            <div class="status-text" id="status-text">주문 접수 중...</div>
            <div class="status-desc" id="status-desc">“이 주문은 실제로 만들지 않아도 됩니다.”</div>
            <div class="progress-bar-container">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
            <p class="warning-text" style="margin-top:40px;">실제로는 아무 일도 일어나지 않습니다.</p>
        </div>
    `;
    
    if (!state.isProgressing) {
        state.isProgressing = true;
        let step = 0;
        
        const interval = setInterval(() => {
            step++;
            if (step >= progressSteps.length) {
                clearInterval(interval);
                state.isProgressing = false;
                completeOrder();
                return;
            }
            
            document.getElementById('status-text').innerText = progressSteps[step].text;
            document.getElementById('status-desc').innerText = progressSteps[step].desc;
            document.getElementById('progress-bar').style.width = ((step / (progressSteps.length - 1)) * 100) + '%';
            
        }, 1200);
        
        // Initial bar width
        setTimeout(() => {
            if(document.getElementById('progress-bar')) {
                document.getElementById('progress-bar').style.width = '10%';
            }
        }, 50);
    }
}

// 6. 결과 화면
function renderResult() {
    const todayCount = parseInt(localStorage.getItem('todaySuccessCount') || '0');
    const title = getTitleByCount(todayCount);
    const totalMoney = parseInt(localStorage.getItem('totalSavedMoney') || '0');
    const totalCal = parseInt(localStorage.getItem('totalSavedCalories') || '0');
    
    let html = `
        <div class="screen result-screen">
            <div class="badge">오늘 ${todayCount}번째 참음!</div>
            <div class="result-title">주문하지 않기 성공! 🎉</div>
            <div class="sub-text">당신은 방금 돈과 칼로리를 동시에 지켰습니다.</div>
            
            <div class="result-card">
                <div class="stat-row">
                    <span class="stat-label">이번에 아낀 금액</span>
                    <span class="stat-value" style="color:var(--primary-color)">${formatMoney(state.savedData.money)}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">이번에 아낀 칼로리</span>
                    <span class="stat-value" style="color:var(--success-color)">${formatCal(state.savedData.cal)}</span>
                </div>
            </div>
            
            <div class="result-card" style="background-color:var(--bg-color);">
                <div style="font-size:14px; color:var(--text-sub); margin-bottom:12px;">나의 누적 기록</div>
                <div class="stat-row">
                    <span class="stat-label">획득 칭호</span>
                    <span class="stat-value">🏅 ${title}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">누적 아낀 금액</span>
                    <span class="stat-value">${formatMoney(totalMoney)}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">누적 아낀 칼로리</span>
                    <span class="stat-value">${formatCal(totalCal)}</span>
                </div>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:8px;">
                <button class="btn btn-success" onclick="copyResult()">결과 복사하기</button>
                <button class="btn btn-secondary" onclick="navigate('landing')">한 번 더 참기</button>
                <button class="back-btn" style="margin-top:16px; font-size:12px; color:#aaa;" onclick="resetRecords()">오늘 기록 초기화 (테스트용)</button>
            </div>
        </div>
        <div id="toast" class="toast">복사되었습니다!</div>
    `;
    appDiv.innerHTML = html;
}

// --- 액션 핸들러 ---
window.navigate = function(screenName) {
    if (state.isProgressing) return;
    
    // 리셋 로직
    if (screenName === 'landing' || screenName === 'category') {
        state.quantity = 1;
        state.options = { spice: 1, size: 0, side: 0 };
    }
    
    state.screen = screenName;
    render();
}

window.selectCategory = function(catId) {
    state.selectedCategoryId = catId;
    navigate('storeList');
}

window.selectStore = function(storeId) {
    state.selectedStoreId = storeId;
    navigate('menuDetail');
}

window.updateOption = function(type, index) {
    state.options[type] = index;
    render();
}

window.changeQty = function(delta) {
    let newQty = state.quantity + delta;
    if (newQty < 1) newQty = 1;
    if (newQty > 10) newQty = 10;
    state.quantity = newQty;
    render();
}

window.startOrder = function() {
    navigate('progress');
}

function completeOrder() {
    saveResult(state.savedData.money, state.savedData.cal);
    navigate('result');
}

window.copyResult = function() {
    const text = `나는 오늘 배달을 시키지 않고 ${formatMoney(state.savedData.money)}과 ${formatCal(state.savedData.cal)}를 아꼈다.\n오늘도 안 시켰다.`;
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast();
        }).catch(err => {
            alert('복사 실패! 아래 텍스트를 직접 복사해주세요.\n\n' + text);
        });
    } else {
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            alert('복사 실패! 아래 텍스트를 직접 복사해주세요.\n\n' + text);
        }
        textArea.remove();
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    if(toast) {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }
}

window.resetRecords = function() {
    if(confirm('기록을 모두 초기화할까요?')) {
        localStorage.removeItem('totalSavedMoney');
        localStorage.removeItem('totalSavedCalories');
        localStorage.removeItem('successCount');
        localStorage.removeItem('todaySuccessCount');
        localStorage.removeItem('lastSavedDate');
        initStorage();
        render();
    }
}

// --- 초기화 ---
initStorage();
render();
