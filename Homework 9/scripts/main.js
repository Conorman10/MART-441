$('#loadData').on('click', async function() {
    console.log('Button clicked');
    let gdpData = [];
    try {
        const response = await fetch('scripts/data.json');
        if (!response.ok) throw new Error('Network response was not ok');

        const jsonData = await response.json();
        console.log('Fetched data:', jsonData);

        gdpData = jsonData[1].map(item => ({
            year: item.date,
            gdp: item.value
        }));
        loadTable(gdpData);
    } catch (error) {
        console.error('Error loading GDP data:', error);
    }
});

function formatGDP(value) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
}

function loadTable(data) {
    const tbody = $('#gdpTable tbody');
    tbody.empty();
    data.forEach(item => {
        tbody.append(`<tr><td>${item.year}</td><td>${formatGDP(item.gdp)}</td></tr>`);
    });
}

$(document).ready(function() {
    let currentSort = { column: 'year', ascending: true };
    let gdpData = [];

    function sortData(column) {
        const isAscending = currentSort.column === column ? !currentSort.ascending : true;
        currentSort = { column, ascending: isAscending };

        gdpData.sort((a, b) => {
            if (a[column] < b[column]) return isAscending ? -1 : 1;
            if (a[column] > b[column]) return isAscending ? 1 : -1;
            return 0;
        });

        loadTable(gdpData);
    }

    $('#yearHeader').on('click', () => sortData('year'));
    $('#gdpHeader').on('click', () => sortData('gdp')); 
    console.log($);
});