const gdpData = [
    { "year": 2023, "gdp": 27.72 },
    { "year": 2022, "gdp": 26.01 },
    { "year": 2021, "gdp": 23.68 },
    { "year": 2020, "gdp": 21.35 },
    { "year": 2019, "gdp": 21.54 },
    { "year": 2018, "gdp": 20.66 },
    { "year": 2017, "gdp": 19.61 }
];

$('#loadData').on('click', function() {
    loadTable(gdpData);
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

    loadTable(gdpData);
});