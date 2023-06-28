import ClientsList from "./components/ClientsList/ClientsList";
import {useEffect, useState} from "react";
import axios from "axios";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:3500/clients')
                .then(res => {
                    const clients = res.data;
                    setClients(clients);
                })
        }, 1000);

    }, []);

    return (
      <>
          <AppHeader/>
          {clients && <ClientsList clients={clients} />}
          {!clients && <div>No data</div>}
      </>
    );
}

export default App;
