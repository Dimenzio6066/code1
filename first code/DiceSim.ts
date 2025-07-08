document.body.innerHTML = `
    <label>
        Number of dice:
        <input type="number" id="numDice" value="2" min="1" />
    </label>
    <br/>
    <label>
        Number of sides per die:
        <input type="number" id="numSides" value="6" min="2" />
    </label>
    <br/>
    <button id="rollBtn">Roll Dice</button>
    <div id="result"></div>
`;

function rollDice(numDice: number, numSides: number): number[] {
    const results: number[] = [];
    for (let i = 0; i < numDice; i++) {
        results.push(Math.floor(Math.random() * numSides) + 1);
    }
    return results;
}

document.getElementById('rollBtn')!.addEventListener('click', () => {
    const numDice = parseInt(prompt('Enter number of dice:', '2') || '2', 10);
    const numSides = parseInt(prompt('Enter number of sides per die:', '6') || '6', 10);
    const results = rollDice(numDice, numSides);
    (document.getElementById('result') as HTMLDivElement).innerText = `Results: ${results.join(', ')}`;
});