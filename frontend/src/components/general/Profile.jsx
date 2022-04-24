
const Profile = () => {

    return(
        <div class="base">
            <div class="text">Profile</div>
            <div className="cards">
                <div className="topcard">
                    <div className="pic">
                        <img src="https://placekitten.com/207/202" alt="Avatar"/>
                    </div>
                    <div className="info">
                        <div className="name">
                            Endi Caushi
                        </div>
                        <div className="mini-sec">
                            <div className="inf">Role:</div>
                            <div className="inf-desc">Patient</div>
                        </div>
                        <div className="mini-sec">
                            <div className="inf">E-mail:</div>
                            <div className="inf-desc">catcatcatdogcat@cat.com</div>
                        </div>
                        <div className="mini-sec">
                            <div className="inf">Phone:</div>
                            <div className="inf-desc">+1 (123) 456 7890</div>
                        </div>
                        <div className="mini-sec">
                            <div className="inf">Clinic:</div>
                            <div className="inf-desc">Global Cat Stuff</div>
                        </div>
                    </div>
                </div>
                
                <div className="botcard">
                    <div className="basic-info">
                        <div className="title">
                            <div className="info-text">Basic Information</div>
                            <div className="info-text-info">(Non-Editable)</div>
                        </div>
                        <div className="info-tags">
                            <div className="mini-sec-row">
                                <div className="info-tag">Last visit</div>
                                <div className="info-tag-desc-wrap">
                                    <div className="butttts">March, 10, 2022</div>
                                </div>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Next Visit</div>
                                <div className="info-tag-desc-wrap">
                                    <div className="butttts">March, 17, 2022</div>
                                </div>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Patient ID</div>
                                <div className="info-tag-desc-wrap">
                                    <div className="butttts">#00380544</div>
                                </div>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">SSN</div>
                                <div className="info-tag-desc-wrap">
                                    <div className="butttts">***-**-6846</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="line"></hr>
                    <div className="person-info">
                        <div className="title">
                            <div class="info-text">Personal Information</div>
                            <div className="info-text-info">(Editable)</div>
                        </div>
                        <div className="info-tags">
                            <div className="mini-sec-row">
                                <div className="info-tag">Birth Date</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc">
                                        <div>05/05/00</div>
                                        <i id="icon" class='bx bx-calendar-alt' ></i>
                                    </div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Address</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc"> 555 Huntington Avenue</div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Apt</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc"> 12B</div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">City</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc">
                                        <div>Boston</div>
                                        <i id="icon" class='bx bx-chevron-down' ></i>
                                    </div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">State</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc">
                                        <div>MA</div>
                                        <i id="icon" class='bx bx-chevron-down' ></i>
                                    </div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                        </div>
                    </div>
                    <hr className="line"></hr>
                    <div className="contact-info">
                        <div className="title">
                            <div class="info-text">Contact Info</div>
                            <div className="info-text-info">(Editable)</div>
                        </div>
                        <div className="info-tags">
                            <div className="mini-sec-row">
                                <div className="info-tag">Mobile</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc">
                                        <div>(123) 456 7890</div>
                                    </div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Email</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc">
                                        <div>catcatcatdogcat@cat.com</div>
                                    </div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                        </div>
                    </div>
                    <hr className="line"></hr>
                    <div className="Recent-info">
                        <div className="title">
                            <div class="info-text">Recent Visits</div>
                            <div className="info-text-info">(Non-Editable)</div>
                        </div>
                        <div className="info-tags">
                            <div className="mini-sec-row">
                                <div className="info-tag">Date</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc">
                                        <div>03/10/22</div>
                                    </div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Description</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc"> Routine hair ball check</div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                            <div className="mini-sec-row">
                                <div className="info-tag">Notes</div>
                                <div className="info-tag-wrap">
                                    <div className="info-tag-desc"> Hair ball amount is normal</div>
                                </div>
                                <hr className="section-break"></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Profile;