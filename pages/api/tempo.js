function tempo(request, response) {
    const dynamicDate = new Date();

    carregarDados = function () {

        token = localStorage.getItem("userToken");

        $http({
            method: 'GET',
            url: 'http://localhost:3000/Avaliacao1'
        }).then(function (response) {
            $scope.distritos = response.data;

        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });
    };

    response.json({
        date: dynamicDate.toGMTString()
    });
}

export default tempo;