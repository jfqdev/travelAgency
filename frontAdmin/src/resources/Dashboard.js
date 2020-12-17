// in src/Dashboard.js
import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Iframe from "react-iframe";

export default () => (
  <Card>
    <CardHeader title="Sportrip" />
    <CardContent>Bienvenido al Panel de Administración</CardContent>
  </Card>
);

/* export default () => (
            <Card>
                <CardHeader title="Sportrip.uy Preview" />
                
                <CardContent >                    
                    <Iframe url="https://challenge-js-jfq.herokuapp.com/"
                    width="600px"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>                  
                </CardContent>
                
            </Card>

); */
