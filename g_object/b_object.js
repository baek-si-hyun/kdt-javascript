let lunch = new Object();

lunch.name = "김밥";
lunch.price = "3000";

console.log(lunch);

lunch.pay = () => {
    console.log("결제완료");
};
lunch.pay();
