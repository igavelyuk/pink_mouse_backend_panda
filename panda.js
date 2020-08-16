const http = require('http')
const { parse } = require('querystring');
const axios = require('axios');

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
        response.end('ok');
    });
  }
});

    function Resend(data){
      console.log(data);
      let url = "https://chatapi.viber.com/pa/broadcast_message";
      var mainMessage;
      var corruptedProducts = data.products;
      var fixedProducts = corrupted.replace(/[!<br> ]/g, "");
      console.log(fixed)

      if(data.selfvinos===true){
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
        auth_token:"",
         receiver: "GoHi3E4bJK5s1Ldhx24eLQ==",
         min_api_version :1,
         sender:{
            name:"sushiPanda",
            avatar:"https://sushipandabc.com.ua/img/logo.png"
         },
         broadcast_list:[
           'GoHi3E4bJK5s1Ldhx24eLQ==',
           'R53lvkCxW/FA2N0VpXKbfg==',
           'OrXITjUgTWZueKxjpTy9yA==',
           'qmGv//gg452DJGIz1q9siw=='
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


const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
