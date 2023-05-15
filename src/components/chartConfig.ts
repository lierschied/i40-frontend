export function getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}

export const data = () => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                stepped: true,
                data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
            }
        ]
    }
}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        intersect: false,
        axis: 'x'
    },
}
