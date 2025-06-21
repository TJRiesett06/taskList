

            let listArray;
            let displayArray = JSON.parse(localStorage.getItem('list'));
            console.log(displayArray);

            if(displayArray === null){
                listArray = [];
                console.log("hello");
            }else{
                listArray = displayArray;
            }

            renderDisplay();

            function renderDisplay(){
                let listHTML = '';
                let list = '';

                for(let i = 0; i < listArray.length; i++){
                    let tempListArray = listArray[i];

                    const{listItem, date} = tempListArray;

                    let html = `
                                <div>${listItem}</div>
                                <div>${date}</div>
                                <button class="delete-todo-button" onclick="
                                    listArray.splice(${i}, 1);
                                    renderDisplay();
                                    localStorage.setItem('list', JSON.stringify(listArray));
                                ">Delete</button>
                    `;
                    listHTML += html;


                }
                document.querySelector('.js-insert-list').innerHTML = listHTML;
            }

            function captureText(){
               const inputElement = document.querySelector('.js-input-text');
               let inputValue = inputElement.value;
               console.log(inputValue);

               const dateElement = document.querySelector('.js-date');
               let dateValue = dateElement.value;
               //console.log(dateValue);

                listArray.push({
                    listItem: inputValue,
                    date: dateValue
                });



               /*
               listArray.push(10);
               listArray.push(12);
               */

               inputElement.value = '';

               console.log(listArray);
               localStorage.setItem('list', JSON.stringify(listArray));

               renderDisplay();
            }