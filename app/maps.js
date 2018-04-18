function initMap() {
    // Create a map object and specify the DOM element for display.

    const MIHALOVO = {lat: 53.991756, lng: 26.951926};

    var map = new google.maps.Map(document.getElementById('mapNeighbors'), {
        center: MIHALOVO,
        mapTypeId: 'hybrid',
        zoom: 16
    });

    var neighborsArray = [
        {   position: {lat: 53.990233, lng: 26.952842},
            title: 'Spike / пер. Полевой 1-й, 19',
            nickname: 'Spike',
            address: 'пер. Полевой 1-й, 19'
        },
        {
            position: {lat: 53.990694, lng: 26.950775},
            title: 'WOLVERINE / пер. Полевой 1-й, 37',
            nickname: 'WOLVERINE',
            address: 'пер. Полевой 1-й, 37'
        },
        {
            position: {lat: 53.991625, lng: 26.952564},
            title: 'КатяКатерина / пер. Полевой 1-й, 7',
            nickname: 'КатяКатерина',
            address: 'пер. Полевой 1-й, 7'
        },
        {
            position: {lat: 53.993812, lng: 26.952232},
            title: 'Вероника / ул. Полевая, 150',
            nickname: 'Вероника',
            address: 'ул. Полевая, 150'
        },
        {
            position: {lat: 53.994187, lng: 26.944640},
            title: 'Oksana / пер. Полевой 3-й, 9',
            nickname: 'Oksana',
            address: 'пер. Полевой 3-й, 9'
        },
        {
            position: {lat: 53.991102, lng: 26.951809},
            title: 'Алексей Ермолкевич / пер. Полевой 1-й, 28',
            nickname: 'Алексей Ермолкевич',
            address: 'пер. Полевой 1-й, 28'
        },
        {
            position: {lat: 53.996181, lng: 26.945886},
            title: 'Tanchik122 / ул. Полевая, 122',
            nickname: 'Tanchik122',
            address: 'ул. Полевая, 122'
        },
        {
            position: {lat: 53.993674, lng: 26.948081},
            title: 'Э́дди / пер. Полевой 2, 28',
            nickname: 'Э́дди',
            address: 'пер. Полевой 2, 28'
        },
        {
            position: {lat: 53.994834, lng: 26.945043},
            title: 'К.А.Т.Я. / пер. Полевой 2, 12',
            nickname: 'К.А.Т.Я.',
            address: 'пер. Полевой 2, 12'
        },
        {
            position: {lat: 53.992287, lng: 26.950099},
            title: 'kripa / пер. Полевой 1, 49',
            nickname: 'kripa',
            address: 'пер. Полевой 1, 49'
        },
        {
            position: {lat: 53.993520, lng: 26.953012},
            title: 'Paplevka / ул. Полевая, 154',
            nickname: 'Paplevka',
            address: 'ул. Полевая, 154'
        }
    ];



    for (var i = 0; i < neighborsArray.length; i++) {

        neighborsArray[i] = new google.maps.Marker({
            map: map,
            position: neighborsArray[i].position,
            title: neighborsArray[i].title,
            nickname: neighborsArray[i].nickname,
            address: neighborsArray[i].address,
            animation: google.maps.Animation.BOUNCE
        });

        neighborsArray[i].addListener('click', function() {

            var h1 = document.getElementsByTagName("h1");

            h1[0].innerText = "Ник на форуме: " + this.nickname + " / Адрес: " + this.address;

        });
    }

}