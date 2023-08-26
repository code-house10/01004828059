// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "ونش الواحة للإنقاذ السريع", "عمبل راضى عن خدماتنا رضاء تام جداا   خدماتنا  خدمات مصممة خصيصًا لعملك خدمات مصممة خصيصًا لعملك    مشروعنا  مشاريعنا المكتملة مؤخرا   مقالاتنا الحديثة  اخر مقالاتنا  اراء عملائنا  تقييمات من بعض عملائنا  تغطية شاملة  استجابة سريعة  أسعار مناسبة   ", "");
   this[database_length++] = new SearchPage("article.php", "ونش الواحة لأنقاذ وسحب السيارات", "ونش إنقاذ أكتوبر    احدث   المقالات مؤخرا  اراء عملائنا  تقييمات من بعض عملائنا   ", "");
   this[database_length++] = new SearchPage("article_index.php", "ونش الواحة لأنقاذ جميع السيارات", "ونش إنقاذ أكتوبر    احدث   كل المقالات   ", "");
   this[database_length++] = new SearchPage("header&footer.html", "ونش الواحة للإنقاذ السريع", "جميع الحقوق محفوظة لشركتنا    إتصل الأن  إرسل لنا موقعك الان   ", "");
   return this;
}
