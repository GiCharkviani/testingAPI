// manipulate responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>შენი URL ვერ დაფორმატდა. ვწუხვარ, ცამდე ვწუხვარ.</p><p>ცდა ბედის მონახევრეა.</p>"
  } else {
    responseField.innerHTML = `<p>შემოკლებული URL: </p><p> ${res.shortUrl} </p> <br> <p>აუცილებლად შეინახე შემოკლებული ლინკი, თუ გსურს მიიღო სტატისტიკა:</p> <ul><li>რამდენჯერ დააკლიკეს</li><li>რომელი ქვეყნიდან/ქალაქიდან</li><li>რა მოწყობილობით</li><li>და ა.შ.</li></ul> <br> <h4>ზემოთ ხსენებული ინფორმაციის მისაღებად, შემოკლებული ლინკი მიაწოდე თსუმასალების ადმინისტრაციას და საჩუქრად მიიღე მიწოდებული ლინკის: QR კოდი და სლეშის "/" შემდეგ სასურველი ტექსტის ჩასმა ლინკში</h4>`
  }
}

// manipulate responseField to render an unformatted response
const renderRawResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>შენი URL ვერ დაფორმატდა. ვწუხვარ, ცამდე ვწუხვარ.</p><p>ცდა ბედის მონახევრეა.</p>"
  } else {
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n")
    structuredRes = `<pre>${structuredRes}</pre>`

    responseField.innerHTML = `${structuredRes}`
  }
}
