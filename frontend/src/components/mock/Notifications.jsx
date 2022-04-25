import Sidebar from "../general/Sidebar";

const Notifications = () => {

    const cardsInfo = [
        {title:'Need to Reschedule', date:'April 22, 2022', author:'Yuan Gao', body:'Due to cats, the appointment on May 5th needs to be rescheduled.'},
        {title:'Important Reminder', date:'April 18, 2022', author:'Yuan Gao', body:'Please remember to bring your cat with you.'},
        {title:'Free Candy?', date:'April 12, 2022', author:'Yuan Gao', body:'There will be free candy on your next visit.'}
    ];

    const renderCard = (card, index) => {
        return (
            <div class="card" key={index}>
                <div class='card-content'>
                    <div class='card-titlebar'>
                        <div class='card-title'>
                            {card.title}
                        </div>
                        <div class='card-date'>
                            ({card.date})
                        </div>
                    </div>

                    <div class='card-author'>
                        {card.author}
                    </div>
                    
                    <div class='card-body'>
                        {card.body}
                    </div>
                </div>
            </div>
        );
    };

    return(
        <div className="wrapper">
            <Sidebar/>
            <div class="base">
                <div class="text">Notifications</div>
                {cardsInfo.map(renderCard)}
            </div>
        </div>
);
}

export default Notifications;