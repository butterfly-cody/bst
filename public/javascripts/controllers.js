var LoginCtrl = function ($scope,$http,$window){
    $scope.checkAuth = function(){
        $http.post('/doLogin',$scope.user).
            success(function(data){
                $window.location='/';
            });
    }
}

var IndexCtrl = function($scope,$http,$window){
    var tree, treeData;
    var apple_selected = function(branch) {
        return $scope.output = "APPLE! : " + branch.label;
    };
    treeData = [
        {
            label: 'Animal',
            children: [
                {
                    label: 'Dog',
                    data: {
                        description: "man's best friend"
                    }
                }, {
                    label: 'Cat',
                    data: {
                        description: "Felis catus"
                    }
                }, {
                    label: 'Hippopotamus',
                    data: {
                        description: "hungry, hungry"
                    }
                }, {
                    label: 'Chicken',
                    children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }
            ]
        }, {
            label: 'Vegetable',
            data: {
                definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
                data_can_contain_anything: true
            },
            onSelect: function(branch) {
                return $scope.output = "Vegetable: " + branch.data.definition;
            },
            children: [
                {
                    label: 'Oranges'
                }, {
                    label: 'Apples',
                    children: [
                        {
                            label: 'Granny Smith',
                            onSelect: apple_selected
                        }, {
                            label: 'Red Delicous',
                            onSelect: apple_selected
                        }, {
                            label: 'Fuji',
                            onSelect: apple_selected
                        }
                    ]
                }
            ]
        }, {
            label: 'Mineral',
            children: [
                {
                    label: 'Rock',
                    children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                    label: 'Metal',
                    children: ['Aluminum', 'Steel', 'Copper']
                }, {
                    label: 'Plastic',
                    children: [
                        {
                            label: 'Thermoplastic',
                            children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                        }, {
                            label: 'Thermosetting Polymer',
                            children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                        }
                    ]
                }
            ]
        }
    ];

    $scope.my_tree_handler = function(branch) {
        var _ref;
        $scope.output = "You selected: " + branch.label;
        if ((_ref = branch.data) != null ? _ref.description : void 0) {
            return $scope.output += '(' + branch.data.description + ')';
        }

            $http.post('/doUnitSave',{"treeData":treeData});

    };

    $scope.my_data = treeData;
    $scope.my_tree = tree = {};

    $scope.loginOut = function(){
        $http.get('/loginOut').
            success(function(){
                $window.location='/login';
            });
    };
};

