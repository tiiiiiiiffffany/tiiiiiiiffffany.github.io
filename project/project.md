政治系國關組二年級B06106016 陳孟辰
前端程式設計作業---個人履歷


本次網站template來源皆是Bootstrap.com 沒有引用別人的模板

網頁介紹:<br>
1.開頭是簡略地身份介紹以及簡短的個人特質講述，以防瀏覽者覺得過於冗長，盡量精簡化內容並避免文字贅述過多。<br>
2.為因應求職所需，網頁著重在學歷部分介紹，以防主頁過於雜亂，將關於校系以及曾學校的內容至於連結中，供瀏覽者點選按鈕前往。<br>
3.除了對於現正修習校系介紹，也附上了現在的課表供瀏覽參考，另外，也附上之前就讀學校的簡介以及官方網站連結<br>
4.由於不同瀏覽者想得知的內容不會相同，為了得知他們的想法以利日後更新網站，因此也設置供瀏覽者問問題以及留言的地方<br>
5.又由於照片是瀏覽起來最方便、又最容易讓別人瞭解自己的媒介，於是放上近期照片、並打算不定期更新。<br>
6.另外為增添履歷豐富度，加上課外活動經歷，點選按鈕會彈出相關經歷細節頁面<br>
7.最後，現今社群軟體眾多，從這些軟體也能更深入了解一個人，於是附上個人Facebook以及Instagram的連結，並且提供Gmail網址給瀏覽者做聯繫用<br>

實作：<br>
1.在主頁設置了Navbar，將背景改為透明，並將位置改為fixed，以防止其因為頁面的滑動而移位<br>
2.主頁header、Current school roll頁面的header、不同division間皆運用float、margin、width...等CSS元素來排版文字、圖片以及division<br>
3.使用列點式的Card來簡述學歷以及附上Button供更多內容的連結、運用“row“來使三個card位處同一列、上網查詢了使顏色漸層的程式碼，使Card背景為雙色漸層結果<br>
4.運用carousel來展示照片<br>
5.在Extracurricular Activity Experience部分運用三個Card並將button改成modal製造彈出視窗，並在裡面詳述相關資訊<br>
6.使用含有圖片以及按鈕的Card來附上gmail, facebook, and instagram連結，並且也使用mailto 語法，讓瀏覽者點選寄件給gmail的button連結，一樣使用“row“來使三個card位處同一列<br>
7.在Current school roll頁面，校系介紹部分因為內容眾多因此在各division中的paragraph運用scroll and overflow方便瀏覽者滑動以查看更多，至於網頁下方則運用了table，並顏色漸層的程式碼（webkit)，使 table背景為雙色漸層結果<br>
8.在Educational Background頁面運用了scrollspy來展示三個學校的簡介，除了可以滑動觀看更多內容，三個tag也可以直接帶瀏覽者至想閱讀的部分，三個學校的官方網展連結則用Card呈現<br>
9.在Q&C頁面則是運用form 來完成<br>
10.在每個頁面都附上回到主頁面得按鈕，方便使用者隨時回到主頁面<br>
