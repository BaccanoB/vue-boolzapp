var app = new Vue(
    {
        el:"#root",
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            activeIndex: 0
        },
        methods: {
            getImage: function(index){
                let imgAvatar = this.contacts[index].avatar;
                return "img/avatar" + imgAvatar + ".jpg"
                
            },
            getLastMessageKey: function(indexContact){
                let indexLastMessage = this.contacts[indexContact].messages.length -1;
                return this.contacts[indexContact].messages[indexLastMessage];
            },
            setActive: function(newIndex){
                this.activeIndex = newIndex;
            },
            // getLastMessage: function(index) {
            //     return getLastMessageKey(index).text.substr(0,30);
            // }
            addItem: function(event) {
                const obj = {
                    date: '10/01/2020 15:50:00',
                    text: event.target.value,
                    status:'sent'
                };
                this.contacts[this.activeIndex].messages.push(obj);
                event.target.value = "";

                setTimeout(() => { 
                    const response = {
                        date: '10/01/2020 15:51:00',
                        text: 'Ok',
                        status:'received'
                    };
                    this.contacts[this.activeIndex].messages.push(response);
                }, 1000);
            },
            searchContact: function(event){
                for(var i = 0;i< this.contacts.length; i++){
                    let isInclude = this.contacts[i].name.startsWith(event.target.value);
                    if( isInclude == true){
                        this.contacts[i].visible = true
                    } else{
                        this.contacts[i].visible = false
                    }
                    console.log(this.contacts[i].visible);
                }
            }
        }
    }
);

   