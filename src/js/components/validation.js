import { validateForms } from '../functions/validate-forms';

window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1");

  if (title.classList != "hero__title") {
    return;
  }

  if (title.classList == "hero__title") {
    const rules1 = [
      {
        ruleSelector: '.form__name',
        rules: [
          {
            rule: 'minLength',
            value: 3
          },
          {
            rule: 'required',
            value: true,
            errorMessage: 'Заполните имя!'
          }
        ]
      },
      {
        ruleSelector: '.form__tel',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [
          {
            rule: 'required',
            value: true,
            errorMessage: 'Заполните телефон!'
          }
        ]
      },
      {
        ruleSelector: '.form__mail',
        rules: [
          {
            rule: 'minLength',
            value: 3
          },
          {
            rule: 'required',
            value: true,
            errorMessage: 'Заполните имейл!'
          }
        ]
      },
    ];

    const afterForm = () => {
      console.log('Произошла отправка');
    };

    validateForms('.form', rules1, afterForm);
  };

  // if (title.classList == "card-hero__title") {
  //   const rules2 = [
  //     {
  //       ruleSelector: '.form__name',
  //       rules: [
  //         {
  //           rule: 'minLength',
  //           value: 3
  //         },
  //         {
  //           rule: 'required',
  //           value: true,
  //           errorMessage: 'Заполните имя!'
  //         }
  //       ]
  //     },
  //     {
  //       ruleSelector: '.form__tel',
  //       tel: true,
  //       telError: 'Введите корректный телефон',
  //       rules: [
  //         {
  //           rule: 'required',
  //           value: true,
  //           errorMessage: 'Заполните телефон!'
  //         }
  //       ]
  //     },
  //   ];

  //   const afterForm = () => {
  //     console.log('Произошла отправка');
  //   };

  //   validateForms('.form', rules2, afterForm);
  // }
})
