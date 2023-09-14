import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PdfDrink from '../../assets/Lima Drinks Menu.pdf';
import PdfFood from '../../assets/Lima Food Menu.pdf';
import './BookTable.css';
import ReservationsNavbar from '../../components/Navbar/ReservationsNavbar';

const BookTable = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src =
            '//www.opentable.com.au/widget/reservation/loader?rid=196004&type=standard&theme=tall&color=5&dark=true&iframe=true&domain=comau&lang=en-AU&newtab=false&ot_source=Restaurant%20website&ot_campaign=Website';
        script.async = true;

        const widgetContainer = document.getElementById('opentable-widget');
        widgetContainer.appendChild(script);

        return () => {
            if (widgetContainer.contains(script)) {
                widgetContainer.removeChild(script);
            }
        };
    }, []);

    return (
        <>
        <ReservationsNavbar/>
        <div className="book-table-container">
            <Helmet>
                <title>Book Table</title>
                <meta name='description' content='Book a table at Lima Restaurant' />
                <meta property="og:type" content="website" />
                <meta property="og:title" content='Book Table' />
                <meta property="og:description" content='Book a table at Lima Restaurant' />
                <meta property="og:image" content="%PUBLIC_URL%/favicon.ico?v=2" />
                <meta property="og:url" content="https://limarestaurant.com.au/reservations" />
                <link rel='canonical' href='https://limarestaurant.com.au/reservations' />
            </Helmet>

            <h1 className="headtext__matter">Reservations</h1>
            <p className="p__heebo">Thank you for your interest in booking with us.
                In order to ensure our guests enjoy the restaurant experience as intended, we have a few terms in place.
                Please read below to ensure a smooth dining experience.</p>
            <ul className="p__heebo">
                <li>Reservations made in our earlier first dinner sitting between 5pm – 6:30pm are for a maximum of 2 hours commencing from your reservation time. We cannot extend booking times for late arrivals as the table will be rebooked for our second sitting, please advise your guests of this so your dining experience is not rushed.</li>
                <li>There is more flexibility on dining times for reservations from 5pm to 5:30pm and after 8pm. If you require longer than the 2 hour dining time, we recommend booking at these times.</li>
                <li>All parties of 8 or more guests will be served <a href={PdfFood} target="_blank"
                    rel="noreferrer" style={{ textDecoration: 'underline' }}>one of our Tasting Menus</a>. If you’re booking for 8 or more, please ensure you are happy with the menu before completing your reservation. </li>
                <li>Please advise us of any dietaries requirements upon booking. Our menu contains allergens and is prepared in a kitchen that handles sesame, shellfish, eggs, dairy and gluten. Whilst all reasonable efforts are taken to accommodate dietary requirements, we cannot guarantee our food will be completely allergen-free.</li>
                <li>To view our menu please visit <a href='/#menu' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>the Menu Page</a> on our website. For inquiries, visit the contact us page.</li>
                <li>15% service charge applied on public holidays, eves and 10% for groups of 8 or more. Credit card surcharges apply.</li>
                <li>All reservations require a credit card capture to confirm the reservation in the diary.  A reduction in guest numbers on arrival; or a no-show; or late cancellation with less than 24 hours notice, will incur a $40 per person charge to the credit card on file. We prefer not to charge, so please call us if any of the above applies to you within the cancellation period.</li>
                <li>If your preferred date and time is not appearing, it is likely because we are already fully booked for that date and time-slot, so feel free to choose another date and/or time.  There is also the option to submit your details onto the wait list in case there are any cancellations.</li>
                <li>Any reservation inquiries please email <a className='p__heebo' style={{ textDecoration: 'underline', textTransform: 'none' }} href="mailto:Reservations@limarestaurant.com.au">Reservations@limarestaurant.com.au</a></li>
            </ul>
            <div id="opentable-widget"></div>
        </div>
        </>
    )
};

export default BookTable;