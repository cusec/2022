export default function Email() {
    return (
        <table>
            <tr>
                <td style={{borderRight: "2px solid whitesmoke", paddingRight: "1rem"}}>
                    <a href="https://2022.cusec.net" style={{display: "inline-block", textAlign: "center"}}>
                        <img src="/email/logo.png" style={{display: "inline", width: "100px"}} />
                    </a>
                </td>
                <td style={{paddingLeft: "1rem", lineHeight: "1.1"}}>
                    <h3 style={{fontWeight: "bold"}}>Your Name</h3>
                    <p style={{fontStyle: "italic"}}>Your Title</p>
                    <table style={{fontSize: "14px", lineHeight:"1.1"}}>
                        <tr>
                            <td style={{fontWeight: "bold"}}>
                                Mobile
                            </td>
                            <td style={{textAlign: "right"}}>
                                <a href="tel:+1(555)123-4567">
                                    +1 (555) 123-4567 (Name)
                                </a>
                                <br/>
                                <a href="tel:+1(555)123-4567">
                                    +1 (555) 123-4567 (Name)
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold"}}>
                                Email
                            </td>
                            <td style={{textAlign: "right"}}>
                                <a href="mailto:[REPLACE]@cusec.net">
                                    [REPLACE]@cusec.net
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: "bold", paddingRight: "8px"}}>
                                Website
                            </td>
                            <td style={{textAlign: "right"}}>
                                <a href="https://2022.cusec.net">
                                    https://2022.cusec.net
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td style={{paddingRight: "10px"}}>
                                <a href="https://www.facebook.com/cusecofficial/">
                                    <img style={{width: "20px"}} src="/email/facebook.png" />
                                </a>
                            </td>
                            <td style={{paddingRight: "10px"}}>
                                <a href="https://www.instagram.com/cusecofficial/">
                                    <img style={{width: "20px"}} src="/email/instagram.png" />
                                </a>
                            </td>
                            <td style={{paddingRight: "10px"}}>
                                <a href="https://www.linkedin.com/company/cusec/">
                                    <img style={{width: "20px"}} src="/email/linkedin.png" />
                                </a>
                            </td>
                            <td>
                                <a href="https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw">
                                    <img style={{width: "20px"}} src="/email/youtube.png" />
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
}