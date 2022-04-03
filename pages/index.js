function Home() {
    return <div>Home</div>

    carregarDados = function() {

        token = localStorage.getItem("userToken");

        $http({
            method : 'GET',
            url : 'http://localhost:8080/user/distritos'
        }).then(function(response) {
            $scope.distritos = response.data;

        }, function(response) {
            console.log(response.data);
            console.log(response.status);
        });
    }; 
}

export default Home