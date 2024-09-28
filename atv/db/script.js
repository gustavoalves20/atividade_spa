const goalForm = document.getElementById('goalForm');
const goalList = document.getElementById('goalList');

let goals = [];

goalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const serieTittle = document.getElementById('serieTittle').value.trim();
    const totalEpisodes = document.getElementById('totalEpisodes').value.trim();
    const days = document.getElementById('days').value.trim();

    
    const existingGoal = goals.find(goal => goal.title.toLowerCase() === serieTittle.toLowerCase());
    
    if (existingGoal) {
        alert('Esta série já foi adicionada!');
        return; 
    }

    const goal = { title: serieTittle, episodes: totalEpisodes, days: days };
    goals.push(goal);
    renderGoals();
    goalForm.reset();
});

function renderGoals() {
    goalList.innerHTML = '';
    goals.forEach((goal, index) => {
        const li = document.createElement('li');
        li.textContent = `${goal.title} - ${goal.episodes} episódios em ${goal.days} dias`;
        
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Atualizar';
        updateButton.onclick = () => updateGoal(index);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeGoal(index);

        li.appendChild(updateButton);
        li.appendChild(removeButton);
        goalList.appendChild(li);
    });
}

function updateGoal(index) {
    const goal = goals[index];

    document.getElementById('serieTittle').value = goal.title;
    document.getElementById('totalEpisodes').value = goal.episodes;
    document.getElementById('days').value = goal.days;
    goals.splice(index, 1); // Remove uma meta para evitar uma duplicação
    renderGoals();
}

function removeGoal(index) {
    goals.splice(index, 1);
    renderGoals();
}
