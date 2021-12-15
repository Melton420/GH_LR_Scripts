// This script was generated and reflects raw data. It is recommended to change this code to your required logic
load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
    load.WebRequest.defaults.returnBody = false;
    load.WebRequest.defaults.headers = {
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "keep-alive",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
    };

    const webResponse1 = new load.WebRequest({
        id: 1,
        url: "http://nimbusserver.aos.com:8000/",
        method: "GET",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Upgrade-Insecure-Requests": "1"
        },
    }).sendSync();

    const webResponse2 = new load.WebRequest({
        id: 2,
        url: "http://nimbusserver.aos.com:8000/css/main.min.css",
        method: "GET",
        headers: {
            "Accept": "text/css,*/*;q=0.1",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse3 = new load.WebRequest({
        id: 3,
        url: "http://nimbusserver.aos.com:8000/css/images/Down_arrow.svg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse4 = new load.WebRequest({
        id: 4,
        url: "http://nimbusserver.aos.com:8000/vendor/requirejs/require.js",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse5 = new load.WebRequest({
        id: 5,
        url: "http://nimbusserver.aos.com:8000/main.min.js",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse6 = new load.WebRequest({
        id: 6,
        url: "http://nimbusserver.aos.com:8000/services.properties",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse7 = new load.WebRequest({
        id: 7,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_regular_macroman/Roboto-Regular-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse8 = new load.WebRequest({
        id: 8,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_light_macroman/Roboto-Light-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse9 = new load.WebRequest({
        id: 9,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_medium_macroman/Roboto-Medium-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse10 = new load.WebRequest({
        id: 10,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/categories/all_data",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse11 = new load.WebRequest({
        id: 11,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse12 = new load.WebRequest({
        id: 12,
        url: "http://nimbusserver.aos.com:8000/css/images/logo.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse13 = new load.WebRequest({
        id: 13,
        url: "http://nimbusserver.aos.com:8000/css/images/closeDark.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse14 = new load.WebRequest({
        id: 14,
        url: "http://nimbusserver.aos.com:8001/accountservice/GetAccountConfigurationRequest",
        method: "POST",
        headers: {
            "Accept": "application/xml, text/xml, */*; q=0.01",
            "Content-Type": "text/xml; charset=UTF-8",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/",
            "SOAPAction": "com.advantage.online.store.accountserviceGetAccountConfigurationRequest"
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <soap:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice"></GetAccountConfigurationRequest>
            </soap:Body>
        </soap:Envelope>`,
    }).sendSync();

    const webResponse15 = new load.WebRequest({
        id: 15,
        url: "http://nimbusserver.aos.com:8001/accountservice/GetAccountConfigurationRequest",
        method: "OPTIONS",
        headers: {
            "Accept": "*/*",
            "Access-Control-Request-Headers": "content-type,soapaction",
            "Access-Control-Request-Method": "POST",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/",
            "Sec-Fetch-Mode": "cors"
        },
    }).sendSync();

    const webResponse16 = new load.WebRequest({
        id: 16,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/categories",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse17 = new load.WebRequest({
        id: 17,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/deals/search",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "dealOfTheDay": "true"
        },
    }).sendSync();

    const webResponse18 = new load.WebRequest({
        id: 18,
        url: "http://nimbusserver.aos.com:8000/app/tempFiles/popularProducts.json",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse19 = new load.WebRequest({
        id: 19,
        url: "http://nimbusserver.aos.com:8000/app/views/home-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse20 = new load.WebRequest({
        id: 20,
        url: "http://nimbusserver.aos.com:8000/css/images/arrow_right.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse21 = new load.WebRequest({
        id: 21,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_thin_macroman/Roboto-Thin-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse22 = new load.WebRequest({
        id: 22,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_bold_macroman/Roboto-Bold-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse23 = new load.WebRequest({
        id: 23,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1237"
        },
    }).sendSync();

    const webResponse24 = new load.WebRequest({
        id: 24,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1235"
        },
    }).sendSync();

    const webResponse25 = new load.WebRequest({
        id: 25,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1236"
        },
    }).sendSync();

    const webResponse26 = new load.WebRequest({
        id: 26,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1238"
        },
    }).sendSync();

    const webResponse27 = new load.WebRequest({
        id: 27,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1234"
        },
    }).sendSync();

    const webResponse28 = new load.WebRequest({
        id: 28,
        url: "http://nimbusserver.aos.com:8000/css/images/Special-offer.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse29 = new load.WebRequest({
        id: 29,
        url: "http://nimbusserver.aos.com:8000/css/images/GoUp.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse30 = new load.WebRequest({
        id: 30,
        url: "http://nimbusserver.aos.com:8000/css/images/chat_logo.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse31 = new load.WebRequest({
        id: 31,
        url: "http://nimbusserver.aos.com:8000/css/images/facebook.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse32 = new load.WebRequest({
        id: 32,
        url: "http://nimbusserver.aos.com:8000/css/images/twitter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse33 = new load.WebRequest({
        id: 33,
        url: "http://nimbusserver.aos.com:8000/css/images/linkedin.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse34 = new load.WebRequest({
        id: 34,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner1.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse35 = new load.WebRequest({
        id: 35,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner2.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse36 = new load.WebRequest({
        id: 36,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner3.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse37 = new load.WebRequest({
        id: 37,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item3.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse38 = new load.WebRequest({
        id: 38,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item2.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse39 = new load.WebRequest({
        id: 39,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item1.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse40 = new load.WebRequest({
        id: 40,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/categories/attributes",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse41 = new load.WebRequest({
        id: 41,
        url: "http://nimbusserver.aos.com:8000/app/views/category-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse42 = new load.WebRequest({
        id: 42,
        url: "http://nimbusserver.aos.com:8000/css/images/category_banner_4.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse43 = new load.WebRequest({
        id: 43,
        url: "http://nimbusserver.aos.com:8000/css/images/Filter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse44 = new load.WebRequest({
        id: 44,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4200"
        },
    }).sendSync();

    const webResponse45 = new load.WebRequest({
        id: 45,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4600"
        },
    }).sendSync();

    const webResponse46 = new load.WebRequest({
        id: 46,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4700"
        },
    }).sendSync();

    const webResponse47 = new load.WebRequest({
        id: 47,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4300"
        },
    }).sendSync();

    const webResponse48 = new load.WebRequest({
        id: 48,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4400"
        },
    }).sendSync();

    const webResponse49 = new load.WebRequest({
        id: 49,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4100"
        },
    }).sendSync();

    const webResponse50 = new load.WebRequest({
        id: 50,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "4500"
        },
    }).sendSync();

    const webResponse51 = new load.WebRequest({
        id: 51,
        url: "http://nimbusserver.aos.com:8000/",
        method: "GET",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/",
            "Upgrade-Insecure-Requests": "1"
        },
    }).sendSync();

    const webResponse52 = new load.WebRequest({
        id: 52,
        url: "http://nimbusserver.aos.com:8000/css/main.min.css",
        method: "GET",
        headers: {
            "Accept": "text/css,*/*;q=0.1",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse53 = new load.WebRequest({
        id: 53,
        url: "http://nimbusserver.aos.com:8000/css/images/Down_arrow.svg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse54 = new load.WebRequest({
        id: 54,
        url: "http://nimbusserver.aos.com:8000/vendor/requirejs/require.js",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse55 = new load.WebRequest({
        id: 55,
        url: "http://nimbusserver.aos.com:8000/main.min.js",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse56 = new load.WebRequest({
        id: 56,
        url: "http://nimbusserver.aos.com:8000/services.properties",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse57 = new load.WebRequest({
        id: 57,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_regular_macroman/Roboto-Regular-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse58 = new load.WebRequest({
        id: 58,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_medium_macroman/Roboto-Medium-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse59 = new load.WebRequest({
        id: 59,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_light_macroman/Roboto-Light-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse60 = new load.WebRequest({
        id: 60,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/categories/all_data",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse61 = new load.WebRequest({
        id: 61,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/DemoAppConfig/parameters/by_tool/ALL",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse62 = new load.WebRequest({
        id: 62,
        url: "http://nimbusserver.aos.com:8000/css/images/logo.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse63 = new load.WebRequest({
        id: 63,
        url: "http://nimbusserver.aos.com:8000/css/images/closeDark.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse64 = new load.WebRequest({
        id: 64,
        url: "http://nimbusserver.aos.com:8001/accountservice/GetAccountConfigurationRequest",
        method: "POST",
        headers: {
            "Accept": "application/xml, text/xml, */*; q=0.01",
            "Cache-Control": "no-cache",
            "Content-Type": "text/xml; charset=UTF-8",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/",
            "SOAPAction": "com.advantage.online.store.accountserviceGetAccountConfigurationRequest"
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
            <soap:Body>
                <GetAccountConfigurationRequest xmlns="com.advantage.online.store.accountservice"></GetAccountConfigurationRequest>
            </soap:Body>
        </soap:Envelope>`,
    }).sendSync();

    const webResponse65 = new load.WebRequest({
        id: 65,
        url: "http://nimbusserver.aos.com:8001/accountservice/GetAccountConfigurationRequest",
        method: "OPTIONS",
        headers: {
            "Accept": "*/*",
            "Access-Control-Request-Headers": "content-type,soapaction",
            "Access-Control-Request-Method": "POST",
            "Cache-Control": "no-cache",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/",
            "Sec-Fetch-Mode": "cors"
        },
    }).sendSync();

    const webResponse66 = new load.WebRequest({
        id: 66,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/categories",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse67 = new load.WebRequest({
        id: 67,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/deals/search",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "dealOfTheDay": "true"
        },
    }).sendSync();

    const webResponse68 = new load.WebRequest({
        id: 68,
        url: "http://nimbusserver.aos.com:8000/app/tempFiles/popularProducts.json",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        }, 
            returnBody:	true
    }).sendSync();
    
    load.log(webResponse68.body);
    
    if (webResponse68.jsonBody[0].productName === "HP ELITEPAD 1000 G2 TABLET") {
        	load.log("All is good - body was received for product named >>>" + webResponse68.jsonBody[0].productName + "<<<");     	
        }
    else
    	{
    		load.log("All is NOT good - body was NOT received for product named >>>" + webResponse68.jsonBody[0].productName + "<<<");
    }

    const webResponse69 = new load.WebRequest({
        id: 69,
        url: "http://nimbusserver.aos.com:8000/app/views/home-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse70 = new load.WebRequest({
        id: 70,
        url: "http://nimbusserver.aos.com:8000/css/images/arrow_right.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse71 = new load.WebRequest({
        id: 71,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_thin_macroman/Roboto-Thin-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse72 = new load.WebRequest({
        id: 72,
        url: "http://nimbusserver.aos.com:8000/css/fonts/roboto_bold_macroman/Roboto-Bold-webfont.woff",
        method: "GET",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "Origin": "http://nimbusserver.aos.com:8000",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/css/main.min.css"
        },
    }).sendSync();

    const webResponse73 = new load.WebRequest({
        id: 73,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1237"
        },
    }).sendSync();

    const webResponse74 = new load.WebRequest({
        id: 74,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1236"
        },
    }).sendSync();

    const webResponse75 = new load.WebRequest({
        id: 75,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1238"
        },
    }).sendSync();

    const webResponse76 = new load.WebRequest({
        id: 76,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1235"
        },
    }).sendSync();

    const webResponse77 = new load.WebRequest({
        id: 77,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1234"
        },
    }).sendSync();

    const webResponse78 = new load.WebRequest({
        id: 78,
        url: "http://nimbusserver.aos.com:8000/css/images/Special-offer.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse79 = new load.WebRequest({
        id: 79,
        url: "http://nimbusserver.aos.com:8000/css/images/chat_logo.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse80 = new load.WebRequest({
        id: 80,
        url: "http://nimbusserver.aos.com:8000/css/images/GoUp.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse81 = new load.WebRequest({
        id: 81,
        url: "http://nimbusserver.aos.com:8000/css/images/facebook.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse82 = new load.WebRequest({
        id: 82,
        url: "http://nimbusserver.aos.com:8000/css/images/twitter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse83 = new load.WebRequest({
        id: 83,
        url: "http://nimbusserver.aos.com:8000/css/images/linkedin.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse84 = new load.WebRequest({
        id: 84,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner1.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse85 = new load.WebRequest({
        id: 85,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner2.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse86 = new load.WebRequest({
        id: 86,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner3.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse87 = new load.WebRequest({
        id: 87,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item3.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse88 = new load.WebRequest({
        id: 88,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item2.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse89 = new load.WebRequest({
        id: 89,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item1.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse90 = new load.WebRequest({
        id: 90,
        url: "http://nimbusserver.aos.com:8000/catalog/api/v1/categories/attributes",
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse91 = new load.WebRequest({
        id: 91,
        url: "http://nimbusserver.aos.com:8000/app/views/category-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse92 = new load.WebRequest({
        id: 92,
        url: "http://nimbusserver.aos.com:8000/css/images/facebook.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse93 = new load.WebRequest({
        id: 93,
        url: "http://nimbusserver.aos.com:8000/css/images/twitter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse94 = new load.WebRequest({
        id: 94,
        url: "http://nimbusserver.aos.com:8000/css/images/linkedin.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse95 = new load.WebRequest({
        id: 95,
        url: "http://nimbusserver.aos.com:8000/css/images/category_banner_3.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse96 = new load.WebRequest({
        id: 96,
        url: "http://nimbusserver.aos.com:8000/css/images/Filter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse97 = new load.WebRequest({
        id: 97,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3100"
        },
    }).sendSync();

    const webResponse98 = new load.WebRequest({
        id: 98,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3200"
        },
    }).sendSync();

    const webResponse99 = new load.WebRequest({
        id: 99,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3300"
        },
    }).sendSync();

    const webResponse100 = new load.WebRequest({
        id: 100,
        url: "http://nimbusserver.aos.com:8000/app/views/product-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse101 = new load.WebRequest({
        id: 101,
        url: "http://nimbusserver.aos.com:8000/css/images/facebook.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse102 = new load.WebRequest({
        id: 102,
        url: "http://nimbusserver.aos.com:8000/css/images/twitter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse103 = new load.WebRequest({
        id: 103,
        url: "http://nimbusserver.aos.com:8000/css/images/linkedin.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse104 = new load.WebRequest({
        id: 104,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3200"
        },
    }).sendSync();

    const webResponse105 = new load.WebRequest({
        id: 105,
        url: "http://nimbusserver.aos.com:8000/css/images/review_right.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse106 = new load.WebRequest({
        id: 106,
        url: "http://nimbusserver.aos.com:8000/css/images/reviewUser.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse107 = new load.WebRequest({
        id: 107,
        url: "http://nimbusserver.aos.com:8000/css/images/review_Left_disabled.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse108 = new load.WebRequest({
        id: 108,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3202"
        },
    }).sendSync();

    const webResponse109 = new load.WebRequest({
        id: 109,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3201"
        },
    }).sendSync();

    const webResponse110 = new load.WebRequest({
        id: 110,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3200"
        },
    }).sendSync();

    const webResponse111 = new load.WebRequest({
        id: 111,
        url: "http://nimbusserver.aos.com:8000/app/order/views/user-not-login-page.html",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse112 = new load.WebRequest({
        id: 112,
        url: "http://nimbusserver.aos.com:8000/css/images/twitter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse113 = new load.WebRequest({
        id: 113,
        url: "http://nimbusserver.aos.com:8000/css/images/facebook.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse114 = new load.WebRequest({
        id: 114,
        url: "http://nimbusserver.aos.com:8000/css/images/linkedin.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse115 = new load.WebRequest({
        id: 115,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "3200"
        },
    }).sendSync();

    const webResponse116 = new load.WebRequest({
        id: 116,
        url: "http://nimbusserver.aos.com:8000/css/images/chat_logo.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse117 = new load.WebRequest({
        id: 117,
        url: "http://nimbusserver.aos.com:8000/css/images/Special-offer.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse118 = new load.WebRequest({
        id: 118,
        url: "http://nimbusserver.aos.com:8000/css/images/GoUp.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse119 = new load.WebRequest({
        id: 119,
        url: "http://nimbusserver.aos.com:8000/css/images/facebook.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse120 = new load.WebRequest({
        id: 120,
        url: "http://nimbusserver.aos.com:8000/css/images/twitter.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse121 = new load.WebRequest({
        id: 121,
        url: "http://nimbusserver.aos.com:8000/css/images/linkedin.png",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse122 = new load.WebRequest({
        id: 122,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1237"
        },
    }).sendSync();

    const webResponse123 = new load.WebRequest({
        id: 123,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1236"
        },
    }).sendSync();

    const webResponse124 = new load.WebRequest({
        id: 124,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1235"
        },
    }).sendSync();

    const webResponse125 = new load.WebRequest({
        id: 125,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1238"
        },
    }).sendSync();

    const webResponse126 = new load.WebRequest({
        id: 126,
        url: "http://nimbusserver.aos.com:8000/catalog/fetchImage",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
        queryString: {
            "image_id": "1234"
        },
    }).sendSync();

    const webResponse127 = new load.WebRequest({
        id: 127,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner1.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse128 = new load.WebRequest({
        id: 128,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner2.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse129 = new load.WebRequest({
        id: 129,
        url: "http://nimbusserver.aos.com:8000/css/images/Banner3.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse130 = new load.WebRequest({
        id: 130,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item3.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse131 = new load.WebRequest({
        id: 131,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item2.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

    const webResponse132 = new load.WebRequest({
        id: 132,
        url: "http://nimbusserver.aos.com:8000/css/images/Popular-item1.jpg",
        method: "GET",
        headers: {
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Referer": "http://nimbusserver.aos.com:8000/"
        },
    }).sendSync();

});

load.finalize("Finalize", async function () {
});
