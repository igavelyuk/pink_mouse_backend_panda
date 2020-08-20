const http = require('http')
const { parse } = require('querystring');
const axios = require('axios');
const PassPage = require('./passPage')
const FailPage = require('./failPage')

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  // if (request.method == 'POST') {
  //   console.log('POST')
  //   var body = ''
  //   request.on('data', function(data) {
  //     body += data
  //     console.log('Partial body: ' + body)
  //   })
  //   request.on('end', function() {
  //     console.log('Body: ' + body)
  //     response.writeHead(200, {'Content-Type': 'text/html'})
  //     response.end('post received')
  //   })
  // }

  if (request.method === 'POST') {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        // console.log(
        //     parse(body)
        // );
        Resend(parse(body));
        var pass = PassPage('https://pizzapandabc.com.ua');
        response.end(pass);
    });
  }else{
    console.log("Request fail");
  }
});

    function Resend(data){
      console.log(data);
      let url = "https://chatapi.viber.com/pa/broadcast_message";
      var mainMessage;
      var corruptedProducts = data.products;
      var fixedProducts = corruptedProducts.replace(/[!<br> ]/g, "");
      console.log(fixedProducts)

      if(data.self_vinos==='false'){
        mainMessage = `${data.total_price}(грн) | ${fixedProducts} | Тел: ${data.telephone} |  Доставка : ${data.input_address}, ${data.input_city}, ${data.input_state} | ${data.notcall} -> ${data.security}`;
      }else{
        mainMessage = `Kліент забире сам: ${data.total_price}(грн) | ${fixedProducts} | Тел: ${data.telephone} | ${data.notcall} | -> ${data.security}`;
      }

      var currentdate = new Date();
      var datetime = "Замовлення: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
      let formattedDate = datetime;

      var dataSend = {
        auth_token:"4aaf0fa9fc67d6b6-b94b6c7e6ff45df6-59e9dc7ae9aa80c1",
         receiver: "7HxXhTO85Ws/8c8W/L3T1g==",
         min_api_version :1,
         sender:{
            name:"Піцца Панда",
            avatar:"https://pizzapandabc.com.ua/img/icons/favicon-32x32.png"
         },
         broadcast_list:[
           "TCCxdJo6rbUtJUEp5ms0ow==",
           "7HxXhTO85Ws/8c8W/L3T1g==",
           "DLE2ERqX8BKFFBCVGwsM7A=="
         ],
         tracking_data:"tracking data",
         type:"text",
         text:` ( ${formattedDate} ) ${mainMessage}`
      }
      axios({
        method: 'post',
        url: 'https://chatapi.viber.com/pa/broadcast_message',
        data:dataSend
      });
    }


const port = 3003
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
