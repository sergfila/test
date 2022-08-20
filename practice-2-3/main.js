function addElement() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((response) => {
            if (!response.length) {
                return;
            }

            const table = document.querySelector('.table');

            for (let item of response) {
                let tr = document.createElement('tr');

                let tdId = document.createElement('td');
                tdId.innerText = item.id;
                tr.append(tdId);

                let tdTitle = document.createElement('td');
                tdTitle.innerText = item.title;
                tr.append(tdTitle);

                let tdUser = document.createElement('td');
                tdUser.innerText = item.userId;
                tr.append(tdUser);

                let tdBody = document.createElement('td');
                tdBody.innerText = item.body;
                tr.append(tdBody);

                table.append(tr);
                console.log(item);
            }
        })
    ;
}

document.addEventListener('DOMContentLoaded', () => {
    addElement();
});

const ths = document.querySelectorAll('th');
ths.forEach(th => {
    th.addEventListener('click', () => {
        const table = th.closest('table');

        Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => table.appendChild(tr));
    });
});


const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));