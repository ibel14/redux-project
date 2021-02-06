<App >
    <Provider value={lang}>
        <MainPage >
            <Blog >
            
            </Blog>
        </MainPage>

        <ContactPage >
        
            <Consumer >
             {
                 (lang) => {
                     return (
                         <Address land={lang}>

                         </Address>
                     )
                 }
             }
            </Consumer>
        
        </ContactPage>
    </Provider>
</App>