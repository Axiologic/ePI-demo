import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class requestController extends ContainerController {
    constructor(element, history) {
        super(element);
        window.addEventListener("send-leaflet", (event) => {
            const newEvent = new Event("send-leaflet");
            newEvent.data = event.data;
            let profileSsapp = element.querySelector("#profileSsapp iframe");
            try{
                profileSsapp.contentWindow.addEventListener("leaflet-sent", (event) => {
                    history.push("/messages/outbox")
                });
                profileSsapp.contentWindow.dispatchEvent(newEvent);
            }catch(err){
                //
            }
        });
    }
}