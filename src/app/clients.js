import '../styles/clients.scss';

async function getResponse() {
  let response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
  let content = await response.json();

  let modal = document.querySelector('.modal');
  let modalInfo = document.querySelector('.modal-info');
  let table = document.querySelector('.clients-table');
  let caption = document.querySelector('.table-caption');
  caption.style.backgroundColor = 'khaki';
  let male = 0;
  let female = 0;

  for (let key in content) {
    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    let tdCompany = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdPhone = document.createElement('td');
    let tdBalance = document.createElement('td');
    let tdRegistred = document.createElement('td');
    let tdButton = document.createElement('td');

    let button = document.createElement('button');
    button.className = 'del-btn';
    button.append('Delete');

    let isActive = content[key].isActive;
    let gender = content[key].gender;
    let name = content[key].name;
    let company = content[key].company;
    let email = content[key].email;
    let phone = content[key].phone;
    let balance = content[key].balance;

    let registered = content[key].registered;
    let date = new Date(Date.parse(registered.split(' ').join('')));

    table.append(tr);

    tr.append(tdName);
    tdName.append(name);

    tr.append(tdCompany);
    tdCompany.append(company);

    tr.append(tdEmail);
    tdEmail.append(email);

    tr.append(tdPhone);
    tdPhone.append(phone);

    tr.append(tdBalance);
    tdBalance.append(balance);

    tr.append(tdRegistred);
    tdRegistred.append(formatDate(date));
    tr.append(tdButton);
    tdButton.append(button);

    if (isActive) {
      tr.style.backgroundColor = 'rgb(136, 241, 136)';
    } else {
      tr.style.backgroundColor = 'lightgray';
    }

    if (gender === 'female') {
      female++;
    } else {
      male++;
    }

    button.addEventListener('click', () => {
      modal.style.display = 'block';

      let btnYes = document.querySelector('.yes');
      btnYes.addEventListener('click', () => {
        tr.remove();
        modal.style.display = 'none';
        modalInfo.style.display = 'block';
      });
    });
  }

  caption.append(genderBalance(male, female));

  let btnNo = document.querySelector('.no');
  btnNo.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  let closeInfo = document.querySelector('.close-info');
  closeInfo.addEventListener('click', () => {
    modalInfo.style.display = 'none';
  });
}

let backToUp = document.querySelector('.back-up');
backToUp.addEventListener('click', (event) => {
  window.scrollTo(0, 0);
})



let formatDate = function (mSeconds) {

  let dd = mSeconds.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = mSeconds.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yyyy = mSeconds.getFullYear();

  return dd + '.' + mm + '.' + yyyy;
}

let genderBalance = function (man, women) {
  let message = '';

  if (man > women) {
    return message = 'In the database: ' + man + ' men and ' + women + ' women.' + ' There are ' + Number(man - women) + ' more male clients.';
  };

  if (man < women) {
    return message = 'In the database: ' + man + ' men and ' + women + ' women.' + ' There are ' + Number(women - man) + ' more male clients.';
  };

  if (man === women) {
    return message = 'In the database: ' + man + ' men and ' + women + ' women.' + ' Male and female clients are the same.';
  };
};

getResponse();