const Notification = (props) => {
    {className,message,imgSrc} = props;
    return (
        <div className={className}>
        <img className="image" src={imgSrc} />
        <p className="para">{message}</p>
        </div>
    )
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <Notification
      className="bg-primary"
      message="Information Notification"
      imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="bg-success"
      message="Success Notification"
      imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="bg-warning"
      message="Warning Notification"
      imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="bg-danger"
      message="Error Notification"
      imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);
console.log(element)
ReactDOM.render(element, document.getElementById("root"));
