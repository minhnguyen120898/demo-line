liff.init({liffId: '1656258642-BvrO9ygY'}).then(() => {
    if(!liff.isLoggedIn()) {
        liff.login();
        return
    }
    console.log("Liff loggedin !");
    liff.getProfile().then((res) => console.log(res))
})