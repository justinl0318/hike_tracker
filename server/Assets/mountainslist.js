const mountains_list = 
[
    {
      id: 0,
      name: "玉山",
      coordinates: { lat: 23.470002, lng: 120.957274 },
      altitude: 3952,
      checked: false,
      imageUrl: "0.jpg",
      info: "玉山主峰位於台灣的中心位置，海拔3952公尺，為台灣群山之首，百岳排名第一，也是東北亞的最高峰。主峰四周有東、南、西、北峰環繞，外圍還有前峰、小南山、南玉山、東小南山、鹿山與北北峰遙相呼應，宛如眾星拱月般，襯托出主峰的王者之尊，壯偉雄奇的山容、絕佳的展望和絢麗的日出景觀，吸引了無數的中外登山客前來攀登，近年來更成為台灣人一生必須完成的三件事之一。"
    },
    {
      id: 1,
      name: "雪山",
      coordinates: { lat: 24.383401, lng: 121.231754 },
      altitude: 3886,
      checked: true,
      imageUrl: "1.jpg",
      info: "雪山（泰雅語：Babo Hagai、Mahamayan、Sekoan、Sekuwan）是台灣第二高山，雪山山脈最高峰，其最高峰雪山主峰，標高 3,886 公尺，山頂設有一等三角點，位處台中市和平區平等里與苗栗縣泰安鄉梅園村之間。雪山高度僅次於台灣最高峰玉山山脈的玉山（3,952 公尺），在日治時被稱做次高山，是第二座超越日本富士山高度的台灣高山。有地形學書籍稱雪山主峰為「雪山南角」，相對於北側約450公尺處稱「雪山北角」的北稜角。[2]:(圖十三)27雪山即雪霸國家公園中所指的「雪」。在台灣百岳之中，雪山與玉山、秀姑巒山、南湖大山、北大武山合稱「五嶽」，為台灣最具代表性的五座高山。 ",
    },
    {
      id: 2,
      name: "玉山東峰",
      coordinates: { lat: 23.470775, lng: 120.965668 },
      altitude: 3869,
      checked: false,
      imageUrl: "2.jpg",
      info: "玉山東峰，位處臺灣南投縣信義鄉東埔村與高雄市桃源區梅山里之間，標高3,869公尺，日治時期名為東山、新高東山、臺東新高、蕃薯寮新高[1]，山體岩壁崢嶸，巍峨險要，台灣登山家邢天正稱其為天壘峰[2]，為玉山山脈中的一座山峰、台灣百岳排名第三的高峰，也是台灣百岳名峰中的「十峻」之首，位於玉山主峰東側，歸屬玉山國家公園境內，為高屏溪主流荖濃溪發源地。 "
    },
    {
      id: 3,
      name: "玉山北峰",
      coordinates: { lat: 23.487452, lng: 120.959672 },
      altitude: 3858,
      checked: false,
      imageUrl: "3.jpg",
      info: "玉山北峰是台灣玉山山脈中的一座山峰，為台灣百岳名峰之一。位處臺灣南投縣信義鄉東埔村，標高3,858公尺。南有玉山主峰及玉山東峰，北有玉山北北峰(標高3,833公尺，非百岳)。 日治時期名為北山、新高北山、斗六新高，與玉山北北峰相隔一鞍，狀似駱駝的駝峰，台灣登山家邢天正稱其為天駝峰[1]。峰頂的玉山氣象站（標高3,844.8公尺）設置於1943年，至今仍為台灣海拔最高的建築物。玉山國家公園成立後，玉山北峰劃入被保護範圍。"
    },
    {
      id: 4,
      name: "玉山南峰",
      coordinates: { lat: 23.446581, lng: 120.958784 },
      altitude: 3844,
      checked: false,
      imageUrl: "4.jpg",
      info: "玉山南峰為臺灣玉山山脈中的一座高山，也是台灣百岳名峰中的「十峻」之一，行政區屬於高雄市桃源區梅山里。位於玉山主峰南側約2.6公里處、玉山國家公園範圍之內，標高3,844公尺。日治時期名為南山、新高南山。 "
    },
    {
      id: 5,
      name: "秀姑巒山",
      coordinates: { lat: 23.496791, lng: 121.05744 },
      altitude: 3805,
      checked: false,
      imageUrl: "5.jpg",
      info: "秀姑巒山，布農族稱為馬霍拉斯山（巒社群布農語：Maqudas[3]:226[a]、Maduqlas[4]:62,75、郡社群布農語：Mahudas、東埔布農：Suhsuh[4]:61,74），[1][b]是台灣中央山脈中段最高山彙中心的一座高山，標高3,825公尺，為中央山脈最高峰，台灣第三高山，僅次於玉山和雪山[8]，山頂設有二等三角點1691號，國土測繪中心最新圖資標記基點西南方約80多公尺處最高峰標高3829公尺，[2][c]位於南投縣信義鄉東埔村與花蓮縣卓溪鄉立山村的交界，玉山國家公園範圍內。在著名的台灣百岳之中排名第6。秀姑巒山與百岳中的玉山、雪山、南湖大山、北大武山合稱「五嶽」，[14]為台灣最具代表性的五座高山，氣勢磅礡，雄霸一方。 "
    },
    {
      id: 6,
      name: "馬博拉斯山",
      coordinates: { lat: 23.520340, lng: 121.067236 },
      altitude: 3765,
      checked: false,
      imageUrl: "6.jpg",
      info: "馬博拉斯山（布農語：Tapana[3] 或 Ulamun[1][2]）是台灣中央山脈核心部的著名高山，標高3,785公尺，位於南投縣信義鄉東埔村，山頂離花蓮縣卓溪鄉立山村邊界西北方約300公尺處，位在玉山國家公園園區內，為台灣百岳排名第7，「十峻」之一[1]，中央山脈第二高峰[1]，台灣第四高山，僅次於玉山、雪山、秀姑巒山（台灣前四高山玉山、雪山、秀姑巒山、馬博拉斯山都比富士山高）。 "
    },
    {
      id: 7,
      name: "南湖大山",
      coordinates: { lat: 24.361805, lng: 121.439359 },
      altitude: 3742,
      checked: false,
      imageUrl: "7.jpg",
      info: "南湖大山（泰雅語：B'bu' Topuk、Rgyax Topuk、南澳群泰雅語：Rgyax Towpoq、Rgyax Towpoh、溪頭群匹亞南泰雅語：Rgyax Bayu、Rgyax Bazyu[4]:123,131-132,134、志佳陽群泰雅語：b'bu Biyun[5]:488-490、沙拉茅群佳陽泰雅語：b'bu Bizian[6]:152），為臺灣第五高山，中央山脈第三高峰、中央山脈北段的最高峰，海拔3742（3,741.595）公尺，設有一等三角點、三等衛星點LP59，[2]臺灣百岳排名第8。處於中央山脈主稜線北段，南湖山群為臺中市、宜蘭縣、花蓮縣的邊界，最高峰南湖大山山頂位於臺中市和平區平等里，東南方距離花蓮縣秀林鄉和平村的邊界約400多公尺，在太魯閣國家公園內。南湖大山與玉山、雪山、秀姑巒山、北大武山合稱「五嶽」，為臺灣最具代表性的五座高山。山型端凝厚重，素有帝王之山、王者之山之稱；主山的山體，別號「帝王頭」[7]:上冊186-193,200-209。南湖大山亦為現行流通第五版新臺幣貳仟圓鈔票（頁面存檔備份，存於網際網路檔案館）背面之主題。 "
    },
    {
      id: 8,
      name: "東小南山",
      coordinates: { lat: 23.439036, lng: 120.963411 },
      altitude: 3711,
      checked: false,
      imageUrl: "8.jpg",
      info: "東小南山，位於臺灣高雄市桃源區梅山里，標高3,711公尺，為玉山山脈中的一座高山，也是台灣百岳名峰之一，位於玉山南峰南側，轄區歸屬為玉山國家公園管理處。行政區屬於高雄市桃源區。四周環繞玉山南峰、鹿山（北）、達芬尖山（東）、安東昆山（南）、南玉山、小南山（西）。 ",
    },
    {
      id: 9,
      name: "中央尖山",
      coordinates: { lat: 24.310226, lng: 121.416203 },
      altitude: 3705,
      checked: false,
      imageUrl: "9.jpg",
      info: "中央尖山（溪頭群匹亞南泰雅語：B'bu Sgaga[3]、志佳陽群泰雅語：Busiga；德路固語：bqsuy Slaga[4]:488-489、Dgiyaq ququy[5]），是臺灣中央山脈北段一座高山，海拔3,698公尺[1]，為中央山脈第四高峰，在著名的百岳中排名第10，山頂設有三等三角點第6015號，位於臺中市和平區平等里與花蓮縣秀林鄉富世村之間，太魯閣國家公園園區內。中央尖山位於中央山脈主脊高山區的最北段南湖山群、南湖大山南邊主脊稜上，這兩座大山構成中央山脈北段兩個犄角，登山界習並稱為南湖中央尖。百岳中的中央尖山與大霸尖山、達芬尖山合稱「三尖」，中央尖山高度為三尖之首。 "
    },
    {
      id: 10,
      name: "雪山北峰",
      coordinates: { lat: 24.414724, lng: 121.240396 },
      altitude: 3703,
      checked: false,
      imageUrl: "10.jpg",
      info: "雪山北峰（西側的大安溪流域北勢群泰雅語：Kalaylasayan（澤敖利群）；[1]東側的溪頭群匹亞南泰雅語：bbu Tarakusya、bbu Talahqsya、bbu Talax-qsya；[2]:115,196北側的竹東卡奧灣群泰雅語：Karantakkun[3]:114頁註釋），為台灣雪山山脈主脊聖稜線上的知名山峰，海拔高度3,703公尺，設有三等三角點6305號，台灣百岳排名第11，位在雪山北側，行政區劃屬於臺中市和平區平等里、苗栗縣泰安鄉梅園村之間，雪霸國家公園園區內。日治初期有記錄竹東泰雅稱為凱蘭特崑山（バボー·カランタックン），[註 1][4]日治時及戰後初期或以溪頭群匹亞南泰雅傳統山名稱塔拉庫霞山（タラクッシヤ山），[5]:55[6]:2171923年雪山被命名為次高山後，[7]也以日式山名稱為次高北山，而日治及戰後初期的山名「次高山北峰」及「雪山北峰」原是指現今的北稜角。[註 2]雪山北峰南方連接凱蘭特崑山、北稜角、雪山，北邊連接穆特勒布山、素密達山、布秀蘭山；布秀蘭山往東為雪山山脈主脊，連接品田山及其他武陵四秀等山峰，往北支稜連接巴紗拉雲山、大霸尖山。特色為岩層峭立，奇峻高聳，由雪山北峰自雪山主峰，整段稜線海拔高度皆在3,500公尺以上，孑遺冰河侵蝕所形成的懸冰斗地形，斷崖遍佈，是聖稜線中的精華路段，為最高隆起準平原面的遺留。 "
    },
    {
      id: 11,
      name: "關山",
      coordinates: { lat: 23.228086, lng: 120.911717 },
      altitude: 3668,
      checked: false,
      imageUrl: "11.jpg",
      info: "關山是臺灣中央山脈南段主脊上的著名高山，為中央山脈南部的最高峰，標高3,668公尺（3668.477公尺），設有二等三角點編號1674，[1]台灣百岳排名第12，「十峻」之一，位在臺東縣海端鄉利稻村與高雄市桃源區梅山里及拉芙蘭里之間，玉山國家公園西南邊界上，南部橫貫公路（台20線）南側約3.5公里處，與南橫之間有直落一千公尺的關山大崩壁極為險峻因此常常有落石坍方。關山四面險峻，東北方連接往向陽山的主脊上有關山大崩壁、向陽大崩壁等自然奇觀，其中尤以恐龍塔–鷹子嘴一段地形極為困難破碎，一般登山隊多會避開此段主脊，改走庫哈諾辛山進涇橋登山口上支稜。 "
    },
    {
      id: 12,
      name: "南湖大山東峰",
      coordinates: { lat: 24.365894, lng: 121.450661 },
      altitude: 3632,
      checked: false,
      imageUrl: "12.jpg",
      info: "南湖大山東峰，又稱南湖東峰、南湖東山，是位在臺灣臺中市和平區平等里、宜蘭縣南澳鄉金洋村與花蓮縣秀林鄉和平村交界的高山，處於太魯閣國家公園北方界線上，屬中央山脈北段，為宜、中、花三縣市的界點，海拔3,639公尺[1]，在台灣百岳之中排名第14，屬十巖之首，亦為宜蘭縣最高峰。 "
    },
    {
      id: 13,
      name: "大水窟山",
      coordinates: { lat: 23.473853, lng: 121.038618 },
      altitude: 3630,
      checked: false,
      imageUrl: "13.jpg",
      info: "大水窟山，位於臺灣南投縣信義鄉東埔村與花蓮縣卓溪鄉卓溪村之間，為台灣知名山峰，也是台灣百岳之一，標高3,642公尺，排名第13。大水窟山，屬於中央山脈。大水窟山東南方有大水窟湖泊（海拔高度約3,280公尺），南方有南大水窟山（標高3,381公尺。非百岳），北邊連接秀姑巒山。"
    },
    {
      id: 14,
      coordinates: { lat: 23.626735, lng: 121.092082 },
      name: "東郡大山",
      altitude: 3619,
      checked: false,
      imageUrl: "14.jpg",
      info: "東郡大山（布農語：Hahais（郡社群）、Kakais（巒社群）[1]；排灣語：Cukat）為台灣中央山脈的知名高山，標高3,619公尺，設有一等三角點，台灣百岳排名第15、十崇之首。位於南投縣信義鄉東埔村，為中央山脈南段主脊義西請馬至山往西北岔出十多公里的大支脈東郡山彙的最高峰，南方支稜有本鄉山、櫧山轉西接往無雙山，北邊支稜連接宇達佩山、東巒大山，西邊隔郡大溪與玉山山脈北段郡大山、巒大山對望。其特色為山勢高聳不易攀登。布農語hais、kais意為「界線」，郡、巒社群以此山稜為分界，山名以首音節疊音。"
    },
    {
      id: 15,
      name: "奇萊主山北峰",
      coordinates: { lat: 24.118339, lng: 121.334539 },
      altitude: 3607,
      checked: false,
      imageUrl: "15.jpg",
      info: "奇萊山（太魯閣語：Dgiyaq Klbiyun[1]）的最高峰奇萊主山北峰，亦可稱奇萊北峰、奇萊山北峰，位於臺灣花蓮縣秀林鄉富世村，海拔高度3,607公尺，隸屬太魯閣國家公園管轄。因西北、東北、南三面為斷崖，因此在台灣百岳名山之中列入「五嶽三尖一奇」之一奇，[註 1]以及被選為「十峻」之一，奇萊連稜上的最高峰，設有一等三角點，位在中央山脈主脊往東伸出往太魯閣大山的支脈上。 "
    },
    {
      id: 16,
      name: "向陽山",
      coordinates: { lat: 23.284291, lng: 120.992423 },
      altitude: 3603,
      checked: false,
      imageUrl: "16.jpg",
      info: "向陽山（布農語：Aliavtini[3] 或 Aliavjini[4]，日治時記錄大分方面的布農族稱之為「シポポス Shipoposu」[5]:43-44，利稻村布農族稱之為Ragostaura[6]），又名紅葉山[7]（日治時以漢字「紅葉 Kōyō」表記布農語Koyo）[6]，是台灣中央山脈主脊南段的知名高山，標高3,601.1公尺[1]，台灣百岳排名第17，設有三等三角點編號7529，[8]位於臺東縣海端鄉利稻村與高雄市桃源區梅山里之間，玉山國家公園南側的邊界。向陽山是中央山脈主脊大水窟山到關山之間最高的山峰[6]，也是雲峰與關山兩座名峰之間，山形最尖聳雄大的名峰，[5]:43-44其特色為山體廣大高聳，為八秀之一。主脊往東連接三叉山、轉折往北連接南雙頭山、雲峰，往西南方連接魔保來山、溪頭山、關山嶺山、塔關山北峰、塔關山、恐龍尖山、鷹子嘴山、關山北峰及關山。此山峰由主脊往西南連接溪頭山的南側，與往南連接向陽森林遊樂區分出的支稜（即南橫往北攀登向陽山、嘉明湖的大眾登山步道所上登的稜線）西側之間，有直落一千公尺的向陽大崩壁。 "
    },
    {
      id: 17,
      name: "大劍山",
      coordinates: { lat: 24.340941, lng: 121.200492 },
      altitude: 3594,
      checked: false,
      imageUrl: "17.jpg",
      info: "大劍山（泰雅語：Rgyax Qramay[1] 或 B'bu' Mahung[2]），又名巴多瓦諾敏山[註 1]，位於臺灣臺中市和平區梨山里東北部，雪霸國家公園中部，標高3,594公尺，於台灣百岳中排行第18。為台灣百岳名山的「十峻」之一。"
    },
    {
      id: 18,
      name: "雲峰",
      coordinates: { lat: 23.353743, lng: 120.975757 },
      altitude: 3564,
      checked: false,
      imageUrl: "18.jpg",
      info: "雲峰是台灣中央山脈南段的知名高山，標高3,564公尺（3563.757公尺），台灣百岳排名第19、九峨之一，設有二等三角點編號1684、三等衛星點MZ82，[1]位於高雄市桃源區梅山里東部，東方偏北距花蓮縣卓溪鄉邊界約1.3公里，玉山國家公園核心資源保護區西南側。雲峰在中央山脈南段主脊往西南轉西岔出的支脈上約1.5公里處，主脊南方連接南雙頭山、三叉山、向陽山，北邊連接轆轆山、塔芬山、達芬尖山，西側支稜續往西連接玉穗山。 "
    },
    {
      id: 19,
      name: "奇萊主山",
      coordinates: { lat: 24.085997, lng: 121.323234 },
      altitude: 3560,
      checked: false,
      imageUrl: "19.jpg",
      info: "奇萊山（太魯閣語：Dgiyaq Klbiyun[2]），其主山稱為奇萊主山，又稱奇萊山主峰，或簡稱奇萊主峰，位於臺灣花蓮縣秀林鄉富世村、銅門村與南投縣仁愛鄉合作村之間，標高3,560公尺，台灣百岳排名第20，地處中央山脈主稜北段，山頂有編號5984的三等三角點。儘管稱為奇萊山的「主山」或「主峰」，但其高度卻低於北側在中央山脈主稜脈往東的分支脈上，有一等三角點的奇萊山最高峰奇萊主山北峰（標高3,607公尺）。 "
    },
    {
      id: 20,
      name: "Mont Blanc",
      coordinates: { lat: 45.8325, lng: 6.8644 },
      altitude: 4810,
      checked: false,
      imageUrl: "20.jpg",
      info: "Mont Blanc is the highest mountain in the Alps and the highest in Europe west of Russia's Caucasus peaks. It rises 4,810 meters (15,781 feet) above sea level and is located in the Graian Alps, between the regions of Aosta Valley, Italy, and Savoie and Haute-Savoie, France. Mont Blanc is a popular destination for mountaineers, attracting thousands of climbers each year."
    },
    {
      id: 21,
      name: "Matterhorn",
      coordinates: { lat: 45.9764, lng: 7.6583 },
      altitude: 4478,
      checked: false,
      imageUrl: "21.jpg",
      info: "The Matterhorn is a mountain of the Alps, straddling the main watershed and border between Switzerland and Italy. With an altitude of 4,478 meters (14,692 feet), it is one of the highest peaks in the Alps. The Matterhorn is renowned for its striking pyramidal shape, featuring four distinct faces. It is a popular destination for mountaineers and has been the subject of many climbing endeavors and works of art."
    },
    {
      id: 22,
      name: "Mount Fuji",
      coordinates: { lat: 35.3606, lng: 138.7274 },
      altitude: 3776,
      checked: false,
      imageUrl: "22.jpg",
      info: "Mount Fuji, or Fuji-san, is the highest mountain in Japan, standing at 3,776 meters (12,389 feet) above sea level. It is an iconic symbol of Japan and a UNESCO World Heritage Site. Mount Fuji is an active stratovolcano that last erupted in 1707–1708. It is a popular destination for climbers, attracting hundreds of thousands of people each year during the climbing season from July to early September."
    },
    {
      id: 23,
      name: "Eiger",
      coordinates: { lat: 46.5772, lng: 8.0056 },
      altitude: 3970,
      checked: false,
      imageUrl: "23.jpg",
      info: "The Eiger is a mountain in the Bernese Alps of Switzerland. It is famous for its north face, which is one of the most challenging climbs in the Alps. The Eiger has three prominent ridges: the west, north, and southeast ridges. The north face of the Eiger is particularly notorious for its difficulty and danger, earning it the nickname 'Mordwand,' meaning 'Murder Wall.' Despite its challenges, the Eiger is a popular destination for experienced mountaineers."
    },
    {
      id: 24,
      name: "Jungfrau",
      coordinates: { lat: 46.5476, lng: 7.9854 },
      altitude: 4158,
      checked: false,
      imageUrl: "24.jpg",
      info: "The Jungfrau is a mountain in the Bernese Alps of Switzerland. It is one of the main summits of the Bernese Alps and is located between the cantons of Bern and Valais. The Jungfrau is famous for its distinctive pyramid shape and its position in the Jungfrau-Aletsch-Bietschhorn UNESCO World Heritage Site. It is a popular destination for tourists, offering stunning views from its summit and accessible by the Jungfrau Railway."
    }
  ]
  

export default mountains_list
  