window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});
//Template literal ES6 feature
const createInnerHtml = () => {
    const innerHtml = `
            <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Action</th>
            </tr>
            <tr>
                <td><img class="profile" src="./assets/profile-images/Ellipse -4.png" alt="" width="60" height="30"></td>
                <td>Vishruti Patil</td>
                <td>Female</td>
                <td>
                    <div class='dept-table'>HR</div>
                    <div class="dept-table">Finance</div>
                </td>
                <td>700000</td>
                <td>10 Nov 2022</td>
                <td>
                    <img id="1" onclick="remove(this)" src="./assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="1" onclick="update(this)" src="./assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}