var arr = [];
function save() 
{
    var a = {
        name: document.getElementById('Name').value,
        id: document.getElementById('Id').value,
        product: document.getElementById('Product').value,
        quantity: document.getElementById('Quantity').value,
        price: document.getElementById('Price').value,
    }
 console.log(a);
 arr.push(a);
}
function show() 
{
    var html = '';
    for (i in arr)///Tham so thu nhat trong vog lap  for: Gtri khoi tao ban dau=0; nhỏ hơn n-1; 
    {
        var n = 1;
        n++;
        html+ "<tr>";
        html += "<td>" + (n) + "</td>";
        html += "<td>" + arr[i].name + "</td>"; 
        html += "<td>" + arr[i].id + "</td>"; 
        html += "<td>" + arr[i].product + "</td>"; 
        html += "<td>" + arr[i].quantity + "</td>"; 
        html += "<td>" + arr[i].price + "</td>";
        html += "<td>" + parseFloat(arr[i].quantity)*parseFloat(arr[i].price) + "</td>"; html+"</tr>";
        html += "</tr>";
    }
    
    document.getElementById('tbl').innerHTML = html;
}
function reset()
{
    document.getElementById('Name').value='';
    document.getElementById('Id').value='';
    document.getElementById('Product').value='';
    document.getElementById('Quantity').value='';
    document.getElementById('Price').value='';

}