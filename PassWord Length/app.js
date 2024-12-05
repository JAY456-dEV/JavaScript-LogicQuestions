const passInput = document.querySelector('.passInput')
const lowercase = document.querySelector('.lowercass')
const uppercase = document.querySelector('.uppercase')
const number = document.querySelector('.number')
const symbols = document.querySelector('.symbols')
const linecolor = document.querySelector('.linecolor')


passInput.addEventListener('input', function (e) {
    const value = e.target.value;
    let totalStrength = 0;

    if (value === '') {
        resetIndicators();
    } else {
        const indicators = {
            Lowercase: false,
            Number: false,
            Uppercase: false,
            Symbol: false,
        };

        let charStrength = 0;

        for (let char of value) {
            if (char >= 'a' && char <= 'z') {
                indicators.Lowercase = true;
                charStrength += 1;
            } else if (!isNaN(char)) {
                indicators.Number = true;
                charStrength += 1;
            } else if (char >= 'A' && char <= 'Z') {
                indicators.Uppercase = true;
                charStrength += 1;
            } else {
                indicators.Symbol = true;
                charStrength += 1;
            }
        }

        updateIndicators(indicators);      
        totalStrength = calculateTotalStrength(value.length, charStrength);
        updateLineColor(totalStrength);
    }
});

function resetIndicators() {
    lowercase.style.color = '#E4E3E3';
    uppercase.style.color = '#E4E3E3';
    number.style.color = '#E4E3E3';
    symbols.style.color = '#E4E3E3';
}

function updateIndicators({ Lowercase, Uppercase, Number, Symbol }) {
    lowercase.style.color = Lowercase ? 'green' : '#E4E3E3';
    uppercase.style.color = Uppercase ? 'green' : '#E4E3E3';
    number.style.color = Number ? 'green' : '#E4E3E3';
    symbols.style.color = Symbol ? 'green' : '#E4E3E3';
}

function calculateTotalStrength(length, charStrength) {
    const lengthStrength = Math.min(6, Math.floor(length / 3));
    return charStrength + lengthStrength;
}

function updateLineColor(strength) {
    if (strength > 8) {
        linecolor.style.backgroundColor = 'green';
    } else if (strength < 6) {
        linecolor.style.backgroundColor = 'yellow';
    } else {
        linecolor.style.backgroundColor = 'orange';
    }
    linecolor.style.width = `${Math.min(10, strength) * 10}%`;
}
