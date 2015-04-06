angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

  .factory('Stations', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var stations = [{
      id: 1,
      list:'First Station of the Cross',
      title: 'Pontius Pilate condemns Jesus to death.',
      subHeading:'Jesus is condemned to death',
      image:'images/1.jpg',
      content:" <div> <p> <b>Leader:</b> We adore Thee, O Christ, and bless Thee.</p><p><b>All:</b> Because by Thy holy cross Thou hast redeemed the world.</p><p>Jesus, you stand all alone before Pilate. Nobody speaks up for you. Nobody helps defend you. You devoted your entire life to helping others, listening to the smallest ones, caring for those who were ignored by others. They don't seem to remember that as they prepare to put you to death.</p><p>As a child, sometimes I feel alone. Sometimes I feel that others don't stand up for me and defend me when I am afraid. Sometimes I don't feel like I am treated fairly, especially if I am scolded or corrected.</p><p>As an adult, sometimes I feel abandoned and afraid as well. Sometimes I too, feel like I am treated unfairly or blamed for things unfairly. I have a hard time when people criticize me at home or at work.</p><p>Help me be grateful for what you did for me. Help me to accept criticism and unfairness as you did, and not complain. Help me pray for those who have hurt me.</p><p>My Jesus, often have I signed the death warrant by my sins; save me by Thy death from that eternal death which I have so often deserved.</p><p>Our Father.... Hail Mary.... Glory Be to the Father....</p><p>Leader:</b> Jesus Christ Crucified.</p><p><b>All:</b> Have mercy on Us.</p><p><b>Leader:</b> May the souls of the faithful departed, through the mercy of God, Rest in peace.</p><p><b>All:</b> Amen.</p></div>"
    },{
      id: 2,
      list:'Second Station of the Cross',
      title: 'Jesus willingly accepts and patiently bears his cross.',
      subHeading:'Jesus Takes Up His Cross. ',
      image:'images/2.jpg',

      content:" <div>   <p> <b>Leader:</b> We adore you, O Christ, and we praise you.</p><p> <b>All:</b> Because by your holy cross You have redeemed the world.</p><p>Jesus, the cross you have been carrying is very heavy. You are becoming weak and almost ready to faint, and you fall down. Nobody seems to want to help you. The soldiers are interested in getting home, so they yell at you and try to get you up and moving again.</p><p>As a child, sometimes I start to do something, but then get tired of it. I hurry to get finished and sometimes don't do my work well. Sometimes I don't pay attention to what I should be doing. When things get hard for me, sometimes I give up.</p><p>As an adult, I sometimes put things off. I give up too easily, and sometimes don't do my work as well as I know I can.</p><p>My Jesus, the heavy burden of my sins is on Thee, and bears Thee down beneath the cross. I loathe them, I detest them; I call on Thee to pardon them; may Thy grace aid me never more to commit them.</p><p>Our Father.... Hail Mary.... Glory Be to the Father....</p><p> <b>Leader:</b> Jesus Christ Crucified.</p><p> <b>All:</b> Have mercy on Us.</p><p> <b>Leader:</b> May the souls of the faithful departed, through the mercy of God, Rest in peace.</p><p> <b>All:</b> Amen.</p></div>"
    },{
      id: 3,
      list:'Third Station of the Cross',
      title: 'Weakened by torments and by loss of blood, Jesus falls beneath his cross.',
      subHeading:'Jesus Falls the First Time. ',
      image:'images/3.jpg',
      content:" <div><p><b>Leader:</b> We adore you, O Christ, and we praise you.</p><p><b>All: </b>Because by your holy cross You have redeemed the world.</p><p>Jesus, you feel so alone with all those people yelling and screaming at you. You don't like the words they are saying about you, and you look for a friendly face in the crowd. You see your mother. She can't make the hurting stop, but it helps to see that she is on your side, that she is suffering with you. She does understand and care.</p><p>As a child, sometimes I feel like too many things are going on. Sometimes other kids pick on me and call me names. I need to look around me for a friendly face, and for the help I need. I need to share my troubles with those who truly care about me.</p><p>As an adult I sometimes feel overwhelmed by many things. Life is so competitive, and I worry so much about my future and those who have some control over it. I need to remember that being an adult does not mean having to solve every problem all by myself. I need to look around me for a friendly face, for the help I need.</p><p>Jesus most suffering, Mary Mother most sorrowful, if, by my sins, I caused you pain and anguish in the past, by God's assisting grace it shall be so no more; rather be you my love henceforth till death.</p><p>Our Father.... Hail Mary.... Glory be to the Father....</p><p><b>Leader: </b>Jesus Christ Crucified.</p><p><b>All: </b>Have mercy on Us.</p><p><b>Leader: </b>May the souls of the faithful departed, through the mercy of God, Rest in peace.<p><b>All: </b>Amen.</p></div>"
    },{
      id: 4,
      list:'Fourth Station of the Cross',
      title: 'Jesus meets his mother, Mary, who is filled with grief. ',
      subHeading:'Jesus Meets His Sorrowful Mother.',
      image:'images/4.jpg',
      content:" <div><p><b>Leader:</b> We adore you, O Christ, and we praise you.</p><p><b>All: </b>Because by your holy cross You have redeemed the world.</p><p>Jesus, you feel so alone with all those people yelling and screaming at you. You don't like the words they are saying about you, and you look for a friendly face in the crowd. You see your mother. She can't make the hurting stop, but it helps to see that she is on your side, that she is suffering with you. She does understand and care.</p><p>As a child, sometimes I feel like too many things are going on. Sometimes other kids pick on me and call me names. I need to look around me for a friendly face, and for the help I need. I need to share my troubles with those who truly care about me.</p><p>As an adult I sometimes feel overwhelmed by many things. Life is so competitive, and I worry so much about my future and those who have some control over it. I need to remember that being an adult does not mean having to solve every problem all by myself. I need to look around me for a friendly face, for the help I need.</p><p>Jesus most suffering, Mary Mother most sorrowful, if, by my sins, I caused you pain and anguish in the past, by God's assisting grace it shall be so no more; rather be you my love henceforth till death.</p><p>Our Father.... Hail Mary.... Glory be to the Father....</p><p><b>Leader: </b>Jesus Christ Crucified.</p><p><b>All: </b>Have mercy on Us.</p><p><b>Leader: </b>May the souls of the faithful departed, through the mercy of God, Rest in peace.<p><b>All: </b>Amen.</p></div>"
    },{
      id: 5,
      list:'Fifth Station of the Cross',
      title: 'Soldiers force Simon of Cyrene to carry the cross. ',
      subHeading:'Simon of Cyrene Helps Jesus Carry the Cross. ',
      image:'images/5.jpg',
      content:" <div><p><b>Leader: </b>We adore you, O Christ, and we praise you.</p><p><b>All: </b>Because by your holy cross You have redeemed the world.</p><p>Jesus, the soldiers are becoming impatient. This is taking longer than they wanted it to. They are afraid you won't make it to the hill where you will be crucified. As you grow weaker, they grab a man out of the crowd and make him help carry your cross. He was just watching what was happening, but all of a sudden he is helping you carry your cross.</p><p>As a child, sometimes I see people who need my help. Sometimes I pretend not to hear when my parents call me. I disappear when I know others could use my help.</p><p>As an adult, sometimes I try to do as little as I can and still get by. Others might need my help, but I ignore their needs. Even when I'm asked to help, I sometimes claim to be too busy.</p><p>My Jesus, blest, thrice blest was he who aided Thee to bear the cross. Blest too shall I be if I aid Thee to bear the cross, by patiently bowing my neck to the crosses Thou shalt send me during life. My Jesus, give me grace to do so.</p><p>Our Father.... Hail Mary.... Glory be to the Father....</p><p><b>Leader: </b>Jesus Christ Crucified.</p><p><b>All: </b>Have mercy on Us.</p><p><b>Leader: </b>May the souls of the faithful departed, through the mercy of God, Rest in peace.</p><p><b>All: </b>Amen.</p></div>"
    },{
      id: 6,
      list:'Sixth Station of the Cross',
      title: 'Veronica steps through the crowd to wipe the face of Jesus. ',
      subHeading:'Veronica Wipes the Face of Jesus.',
      image:'images/6.jpg',
      content:"<div><p><b>Leader: </b>We adore you, O Christ, and we praise you.</p><p><b>All:</b> Because by your holy cross You have redeemed the world.</p><p>Jesus, suddenly a woman comes out of the crowd. Her name is Veronica. You can see how she cares for you as she takes a cloth and begins to wipe the blood and sweat from your face. She can't do much, but she offers what little help she can.</p><p>As a child, sometimes I know someone could use a little help and understanding. They may be picked on or teased by others, or just sad or lonely. Sometimes I feel bad that others don't step in to help, but I don't help either.</p><p>As an adult, I notice the needs around me. Sometimes my own family members crave my attention, and I don't even seem to notice. Sometimes a co-worker, friend, or family member could use help or understanding, but I don't reach out to help lest I be criticized, or that they demand more of me than I'd like to give.</p><p>My tender Jesus, Who didst deign to print Thy sacred face upon the cloth with which Veronica wiped the sweat from off Thy brow, print in my soul deep, I pray Thee, the lasting memory of Thy bitter pains.</p><p>Our Father.... Hail Mary.... Glory be to the Father....</p><p><b>Leader:</b> Jesus Christ Crucified.</p><p><b>All:</b> Have mercy on Us.</p><p><b>Leader:</b> May the souls of the faithful departed, through the mercy of God, Rest in peace.</p><p><b>All:</b> Amen.</p></div> "
    },{
      id: 7,
      list:'Seventh Station of the Cross',
      title: 'Jesus falls beneath the weight of the cross a second time.',
      subHeading:'Jesus Falls a Second Time.',
      image:'images/7.jpg',
      content:" <div><p>Leader: We adore you, O Christ, and we praise you.</p><p>All: Because by your holy cross You have redeemed the world.</p><p>This is the second time you have fallen on the road. As the cross grows heavier and heavier it becomes more difficult to get up. But you continue to struggle and try until you're up and walking again. You don't give up.</p><p>As a child, sometimes things get me down. Others seem to find things easier to do or to learn. Each time I fail, I find it harder to keep trying.</p><p>As an adult, sometimes I think I should know more than I do. I become impatient with myself and find it hard to believe in myself when I fail. It is easy to despair over small things, and sometimes I do.</p><p>Help me when things seem difficult for me. Even when it's hard, help me get up and keep trying as you did. Help me do my best without comparing myself with others.</p><p>My Jesus, often have I sinned and often, by sin, beaten Thee to the ground beneath the cross. Help me to use the efficacious means of grace that I may never fall again.</p><p>Our Father.... Hail Mary.... Glory be to the Father....</p><p>Leader: Jesus Christ Crucified.</p><p>All: Have Mercy on Us.</p><p>Leader: May the souls of the faithful departed, through the mercy of God, Rest in peace.</p><p>All: Amen.</p></div>"
    },{
      id: 8,
      list:'Eigth Station of the Cross',
      title: 'Jesus tells the women to weep not for him but for themselves and for their children.',
      subHeading:'Jesus Meets the Women of Jerusalem.',
      image:'images/8.jpg',
      content:" <div></div>"
    },{
      id: 9,
      list:'Nineth Station of the Cross',
      title: 'Weakened almost to the point of death, Jesus falls a third time.',
      subHeading:'Jesus Falls the Third Time.',
      image:'images/9.jpg',
      content:"<div></div> "
    },{
      id: 10,
      list:'Tenth Station of the Cross',
      title: 'The soldiers strip Jesus of his garments, treating him as a common criminal.',
      subHeading:'Jesus Is Stripped of His Garments.',
      image:'images/10.jpg',
      content:" <div></div>"
    },{
      id: 11,
      list:'Eleventh Station of the Cross',
      title: 'Jesus’ hands and feet are nailed to the cross.',
      subHeading:'Jesus Is Nailed to the Cross.',
      image:'images/11.jpg',
      content:"<div></div> "
    },{
      id: 12,
      list:'Twelveth Station of the Cross',
      title: 'After suffering greatly on the cross, Jesus bows his head and dies.',
      subHeading:'Jesus Dies on the Cross.',
      image:'images/12.jpg',
      content:"<div></div> "
    },{
      id: 13,
      list:'Thirteen Station of the Cross',
      title: 'The lifeless body of Jesus is tenderly placed in the arms of Mary, his mother.',
      subHeading:'Jesus Is Taken Down From the Cross.',
      image:'images/13.jpg',
      content:"<div></div> "
    },{
      id: 14,
      list:'Fourteen Station of the Cross',
      title: 'Jesus’ disciples place his body in the tomb.',
      subHeading:'Jesus Is Laid in the Tomb.',
      image:'images/14.jpg',
      content:"<div></div> "
    }];


    return {
      all: function() {
        return stations;
      },
      remove: function(chat) {
        stations.splice(stations.indexOf(chat), 1);
      },
      get: function(stationId) {
        for (var i = 0; i < stations.length; i++) {
          if (stations[i].id === parseInt(stationId)) {
            return stations[i];
          }
        }
        return null;
      }
    };
  });

//http://www.catholic.org/prayers/station.php?id=5
