import '../styles/clients.scss';

async function getResponse() {
  const response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
  const content = await response.json();

  const modal = document.querySelector('.modal');
  const modalInfo = document.querySelector('.modal-info');
  const table = document.querySelector('.clients-table');
  const caption = document.querySelector('.table-caption');
  caption.style.backgroundColor = 'khaki';
  let male = 0;
  let female = 0;
  let greatBalance = 0;

  for (const key in content) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    const tdCompany = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdPhone = document.createElement('td');
    const tdBalance = document.createElement('td');
    const tdRegistred = document.createElement('td');
    const tdButton = document.createElement('td');

    const button = document.createElement('button');
    button.className = 'del-btn';
    button.append('Delete');

    const isActive = content[key].isActive;
    const gender = content[key].gender;
    const name = content[key].name;
    const company = content[key].company;
    const email = content[key].email;
    const phone = content[key].phone;
    const balance = content[key].balance;

    const registered = content[key].registered;
    const date = new Date(Date.parse(registered.split(' ').join('')));

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

      const btnYes = document.querySelector('.yes');
      btnYes.addEventListener('click', () => {
        tr.remove();
        modal.style.display = 'none';
        modalInfo.style.display = 'block';
      });
    });

    const bestBalance = Number(balance.replace(/[$,]/g, ''));
    if (bestBalance >= greatBalance){
      greatBalance = bestBalance;
    }
  }
  
  caption.append(genderBalance(male, female, greatBalance));

  const btnNo = document.querySelector('.no');
  btnNo.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const closeInfo = document.querySelector('.close-info');
  closeInfo.addEventListener('click', () => {
    modalInfo.style.display = 'none';
  });
}

const backToUp = document.querySelector('.back-up');
backToUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

let formatDate = (mSeconds) => {

  let dd = mSeconds.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = mSeconds.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  const yyyy = mSeconds.getFullYear();

  return dd + '.' + mm + '.' + yyyy;
};

let genderBalance = (man, women, balance) => {
  if (man > women) {
    return 'In the database: ' + man + ' men and ' + women + ' women.' + ' There are ' + Number(man - women) + ' more male clients.' + ' Maximal balance: ' + balance + '$';
  }

  if (man < women) {
    return 'In the database: ' + man + ' men and ' + women + ' women.' + ' There are ' + Number(women - man) + ' more male clients.' + ' Maximal balance: ' + balance + '$';
  }

  if (man === women) {
    return 'In the database: ' + man + ' men and ' + women + ' women.' + ' Male and female clients are the same.' + ' Maximal balance: ' + balance + '$';
  }
};

getResponse();
