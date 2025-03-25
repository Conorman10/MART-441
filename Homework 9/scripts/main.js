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

$(document).ready(function() {
    function loadTable(data) {
        const tbody = $('#gdpTable tbody');
        tbody.empty();
        data.forEach(item => {
            tbody.append(`<tr><td>${item.year}</td><td>${item.gdp}</td></tr>`);
        });
    }

    (function($) {
        $.fn.sortTable = function() {
            this.find('th').on('click', function() {
                const key = $(this).data('sort');
                const columnIndex = key === 'year' ? 0 : 1; 
    
                const rows = $('#gdpTable tbody tr').get();
    
                rows.sort((a, b) => {
                    const A = parseFloat($(a).find('td').eq(columnIndex).text());
                    const B = parseFloat($(b).find('td').eq(columnIndex).text());
                    return A - B; 
                });
    
                $('#gdpTable tbody').append(rows);
            });
        };
    })(jQuery);

    $('#gdpTable').sortTable();
});