const MyMessage =({message}) =>{
    console.log(message);
    if(message?.attachments?.length>0){
        //if greater than 0 means an image(nosh*)
        return(
            <img 
                src={message.attachments[0].file}
                alt="messsage-attachment"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return(
        <div className="message" style={{float:'right', margineRight:'18px', color:'white', backgroundColor:'#3B2A50'}}>
        {message.text}
        </div>
    
        )
    }
    export default MyMessage;