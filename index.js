import * as React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: '#2D2C3C', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Usuarios')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Ir a Usuarios </Text>
            </TouchableOpacity>
        </View>
    );
}

function UsuariosScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#65D9E4' }}>
            <Text style={{ fontSize: 20 }}>Lista de usuarios</Text>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Leanne')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Leanne Graham</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Ervin')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Ervin Howel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Clementine')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Clementine Bauch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Patricia')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Patricia Lebsack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Chelsey')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Chelsey Dietrich</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Dennis')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Mrs.Dennis Schulist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Kurtis')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Kurtis Weissnat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 80, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Nicholas')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Nicholas Runolfsdottir V</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Glenna')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Glenna Reichert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 10, width: 200, height: 50, backgroundColor: '#65D9E4', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Clementina')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Clementina DuBuque</Text>
            </TouchableOpacity>


        </View>
    );
}

function LeanneScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                Username: "Bret",
                Email: "Sincere@april.biz",
                Address:
                Street: "Kulas Light",
                Suite: "Apt. 556",
                City: "Gwenborough",
                
            </Text>

        </View>
    );
}

function ErvinScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address":
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                 
            </Text>

        </View>
    );
}

function ClementineScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "address":
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                 
            </Text>

        </View>
    );
}

function PatriciaScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org",
                "address":
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                 
            </Text>

        </View>
    );
}

function ChelseyScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Kamren",
                "email": "Lucio_Hettinger@annie.ca",
                "address":
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                 
            </Text>

        </View>
    );
}

function DennisScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Leopoldo_Corkery",
                "email": "Karley_Dach@jasper.info",
                "address":
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                 
            </Text>

        </View>
    );
}

function KurtisScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Elwyn.Skiles",
                "email": "Telly.Hoeger@billy.biz",
                "address":
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                 
            </Text>

        </View>
    );
}

function NicholasScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Maxime_Nienow",
                "email": "Sherwood@rosamond.me",
                "address":
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                 
            </Text>

        </View>
    );
}

function GlennaScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                "username": "Delphine",
                "email": "Chaim_McDermott@dana.io",
                "address":
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                 
            </Text>

        </View>
    );
}

function ClementinaScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 20 }}>
                Username": "Moriah.Stanton",
                Email": "Rey.Padberg@karina.biz",
                Address":
                Street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                 
            </Text>

        </View>
    );
}

//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Usuarios" component={UsuariosScreen} />
                <Drawer.Screen name="Leanne" component={LeanneScreen} />
                <Drawer.Screen name="Ervin" component={ErvinScreen} />
                <Drawer.Screen name="Clementine" component={ClementineScreen} />
                <Drawer.Screen name="Patricia" component={PatriciaScreen} />
                <Drawer.Screen name="Chelsey" component={ChelseyScreen} />
                <Drawer.Screen name="Dennis" component={DennisScreen} />
                <Drawer.Screen name="Kurtis" component={KurtisScreen} />
                <Drawer.Screen name="Nicholas" component={NicholasScreen} />
                <Drawer.Screen name="Glenna" component={GlennaScreen} />
                <Drawer.Screen name="Clementina" component={ClementinaScreen} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default MyDrawer;