//1 Объясните почему код даёт именно такие результаты?

    //1.1
    let a = 1, b, c, d
    c = ++a
    alert(c)                //res = 2, because ++a this a = a + 1 is sintaxis sugar

    //1.2 Нужна консультация, почему в задании вывод 1, у меня Nan
    d = b++;
    alert(d); //ответ: 1    //my res Nan, because in b and d are not initialized

    //1.3
    c = 2 + ++a;
    alert(c); // ++a = a=3, c = 2+3 

    //1.4
    d = 2 + b++;
    alert(d); //ответ: 4    //myres Nan, 
    //but i can idey, we want to show difirent execution queues math symbols. 
    //++i this first adds then assigns, i++ this first assigns then adds 

    alert(a); //3 this value from 1.3
    alert(b); //3 this value from 1.4
