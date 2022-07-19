const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const start = async () => {
    try {
        await client.connect()
        console.log("its cool")
        await client.db('delivery').collection('shops').drop()
        await client.db('delivery').collection('product').drop()
        await client.db('delivery').collection('order').drop()
        await client.db('delivery').createCollection('shops')
        await client.db('delivery').createCollection('product')
        await client.db('delivery').createCollection('order')
        const shops = client.db('delivery').collection('shops')
        const product = client.db('delivery').collection('product')
        const order = client.db('delivery').collection('order')
        await shops.insertMany(
           [ {
  "id": 2,
  "shop_name": "FastFood",
  "menu": [
    {
      "id": "1b627481-9ce5-42cf-9366-6e7120643d9d",
      "product": [
        {
          "name": "Burger with  chicken",
          "price": 7,
          "id": "8364a28e-15a9-4744-b723-45684bdbfc59",
        },
        {
          "name": "Burger with fish",
          "price": 7,
          "id": "31dd277b-d377-4458-bcd0-e952439f00d3",
        },
        {
          "name": "Burger double",
          "price": 11,
          "id": "e4a1c16b-501a-4877-9bc0-022a35fc84dd",
        },
        {
          "name": "Burger with veal",
          "price": 9,
          "id": "5a5efae7-f7e2-4396-a1dd-0e035af93e2d",
        }
      ]
    },
    {
      "id": "5f7d9345-0562-4887-b34c-388c05842e1f",
      "product": [
        {
          "name": "Naggets 7 uds",
          "price": 7,
          "id": "ca9875e7-0ea0-4c93-9aff-72bd46b59944",
        },
        {
          "name": "Naggets 10 uds",
          "price": 10,
          "id": "03dea2a5-a300-4f19-805b-c2bfa1afa060",
        },
        {
          "name": "Naggets 15 uds",
          "price": 14,
          "id": "03a0fc7b-ba58-4115-bf79-ced21e7bcb43",
        },
        {
          "name": "Naggets 18 uds",
          "price": 16,
          "id": "34e2e08a-a23e-40b8-80c4-b9fabb93fd73",
        }
      ]
    },
    {
      "id": "e88eaa27-5e2d-4c0a-84d3-1aad5f1ae615",
      "product": [
        {
          "name": "Fries small",
          "price": 2,
          "id": "8a89a478-42dc-474a-a8f4-9af2b89694f5",
        },
        {
          "name": "Fries medium",
          "price": 5,
          "id": "604f7d0e-df0b-4971-a819-e84466833ae5",
        },
        {
          "name": "Fries big",
          "price": 7,
          "id": "b14f9247-bfc3-44a0-9c3f-1f853642c791",
        }
      ]
    },
    {
      "id": "1ba2c64e-9331-4d85-bf14-5e96a7ea4fae",
      "product": [
        {
          "name": "Water",
          "price": 3,
          "id": "82d5ce86-6542-46dc-99cf-27ec1694c4b5",
        },
        {
          "name": "Coca",
          "price": 5,
          "id": "75702c00-5364-4c75-be76-0cc3a2f50796",
        },
        {
          "name": "Fanta",
          "price": 5,
          "id": "c769752b-977f-4761-962f-1496f01e2f40",
        },
        {
          "name": "Sprite",
          "price": 5,
          "id": "fa001457-b64f-4b8e-874d-ba90686bc535",
        },
        {
          "name": "Fresh",
          "price": 7,
          "id": "d4a7603e-3f63-4866-8852-b2d5589e2ceb",
        }
      ]
    }
  ]
},{
  "id": 1,
  "shop_name": "Mexico",
  "menu": [
    {
      "id": "dec6596e-bd10-414c-93f5-a0882d05233e",
      "product": [
        {
          "name": "Buritos with  chicken",
          "price": 10,
          "id": "241d9fcb-ab11-4722-9ee8-f69f49af058f",
        },
        {
          "name": "Buritos spicy",
          "price": 11,
          "id": "8d002ae3-aca5-45b9-b077-8dbca15ce541",
        }
      ]
    },
    {
      "id": "ba7e9a64-4cfc-4db3-b30e-f7a5103b3261",
      "product": [
        {
          "name": "Nachos super",
          "price": 12,
          "id": "a67f43f9-38aa-48de-a29f-3c7bafd41f78",
        },
        {
          "name": "Nachos with chicken",
          "price": 11,
          "id": "9fbcf59f-68d5-4d5a-90da-d18dd28ef0df",
        },
        {
          "name": "Nachos with guacamole",
          "price": 9,
          "id": "1e9aad8e-5daf-4a2c-a2fb-bcabd54089f4",
        }
      ]
    },
    {
      "id": "285724a6-7968-48c3-ab63-28f34bebc92a",
      "product": [
        {
          "name": "Taco standart",
          "price": 5,
          "id": "72ad99f6-384e-4c59-82e6-3966e570ada9",
        },
        {
          "name": "Taco supreme",
          "price": 7,
          "id": "e3596224-0f71-486f-9a5c-287b0329c4cb",
        }
      ]
    },
    {
      "id": "a993c48d-a78c-47bb-b492-7a7003bcf437",
      "product": [
        {
          "name": "Quesadillas with chicken",
          "price": 14,
          "id": "a8e4d64f-eeb0-499a-b085-a0d3c00975eb",
        },
        {
          "name": "Quesadillas spicy",
          "price": 13,
          "id": "896b5172-802b-4c9d-aa85-9ad2ca08957b",
        },
        {
          "name": "Quesadillas with chicken and avocado",
          "price": 16,
          "id": "4a3ec3a0-b2d6-4776-8eac-45faf402685b",
        },
        {
          "name": "Quesadillas with veal",
          "price": 21,
          "id": "6951e818-d0e0-4b5c-9aa2-b2afb05aa138",
        }
      ]
    }
  ]
    },{
  "id": 0,
  "shop_name": "Pizza",
  "menu": [
    {
      "id": 51,
      "product": [
        {
          "name": "Pepperoni small",
          "price": 10,
          "id": "2300376b-8775-40d2-bb8d-80b6abc5787c"
        },
        {
          "name": "Pepperoni medium",
          "price": 15,
          "id": "f732cd3c-8305-4a2e-b31e-689b340e5e78"
        },
        {
          "name": "Pepperoni big",
          "price": 20,
          "id": "e38cd9b3-0b21-464c-bc3f-f9248f7f5505"
        }
      ]
    },
    {
      "id": "0d1b8d09-fb38-42fc-a04e-ecb243a0404b",
      "product": [
        {
          "name": "Carbonara small",
          "price": 15,
          "id": "f49bbabc-f820-4ffb-9768-4e2021f11f42"
        },
        {
          "name": "Carbonara medium",
          "price": 17,
          "id": "7f61c4c6-e911-4884-b9c6-139aa4900ce9"
        },
        {
          "name": "Carbonara big",
          "price": 23,
          "id": "6a34d061-8699-4d6f-ba6f-6ad831760c9c"
        }
      ]
    },
    {
      "id": "a993c48d-a78c-47bb-b492-7a7003bcf437",
      "product": [
        {
          "name": "BBQ small",
          "price": 14,
          "id": "767ed0eb-84d3-463c-a32a-ca03fbd2a26a"
        },
        {
          "name": "BBQ medium",
          "price": 16,
          "id": "d4bf9b04-a179-4453-a056-2e761bd698a1"
        },
        {
          "name": "BBQ big",
          "price": 21,
          "id": "b82c5745-66f5-4e3f-89ea-d3dde0b6841f"
        }
      ]
    }
  ]
}]
        )
        await product.insertMany([{

  "name": "Water",
  "price": 3,
  "id": "82d5ce86-6542-46dc-99cf-27ec1694c4b5"
},{

  "name": "Coca",
  "price": 5,
  "id": "75702c00-5364-4c75-be76-0cc3a2f50796"
},{

  "name": "Fanta",
  "price": 5,
  "id": "c769752b-977f-4761-962f-1496f01e2f40"
},{

  "name": "Sprite",
  "price": 5,
  "id": "fa001457-b64f-4b8e-874d-ba90686bc535"
},{

  "name": "Fresh",
  "price": 7,
  "id": "d4a7603e-3f63-4866-8852-b2d5589e2ceb"
},{

  "name": "Fries small",
  "price": 2,
  "id": "8a89a478-42dc-474a-a8f4-9af2b89694f5"
},{

  "name": "Fries medium",
  "price": 5,
  "id": "604f7d0e-df0b-4971-a819-e84466833ae5"
},{

  "name": "Fries big",
  "price": 7,
  "id": "b14f9247-bfc3-44a0-9c3f-1f853642c791"
},{

  "name": "Naggets 7 uds",
  "price": 7,
  "id": "ca9875e7-0ea0-4c93-9aff-72bd46b59944"
},{

  "name": "Naggets 10 uds",
  "price": 10,
  "id": "03dea2a5-a300-4f19-805b-c2bfa1afa060"
},{

  "name": "Naggets 15 uds",
  "price": 14,
  "id": "03a0fc7b-ba58-4115-bf79-ced21e7bcb43"
},{

  "name": "Naggets 18 uds",
  "price": 16,
  "id": "34e2e08a-a23e-40b8-80c4-b9fabb93fd73"
},{

  "name": "Burger with  chicken",
  "price": 7,
  "id": "8364a28e-15a9-4744-b723-45684bdbfc59"
},{

  "name": "Burger with fish",
  "price": 7,
  "id": "31dd277b-d377-4458-bcd0-e952439f00d3"
},{

  "name": "Burger double",
  "price": 11,
  "id": "e4a1c16b-501a-4877-9bc0-022a35fc84dd"
},{

  "name": "Burger with veal",
  "price": 9,
  "id": "5a5efae7-f7e2-4396-a1dd-0e035af93e2d"
},{

  "name": "Quesadillas with chicken",
  "price": 14,
  "id": "a8e4d64f-eeb0-499a-b085-a0d3c00975eb"
},{

  "name": "Quesadillas spicy",
  "price": 13,
  "id": "896b5172-802b-4c9d-aa85-9ad2ca08957b"
},{

  "name": "Quesadillas with chicken and avocado",
  "price": 16,
  "id": "4a3ec3a0-b2d6-4776-8eac-45faf402685b"
},{

  "name": "Quesadillas with veal",
  "price": 21,
  "id": "6951e818-d0e0-4b5c-9aa2-b2afb05aa138"
},{

  "name": "Taco standart",
  "price": 5,
  "id": "72ad99f6-384e-4c59-82e6-3966e570ada9"
},{

  "name": "Taco supreme",
  "price": 7,
  "id": "e3596224-0f71-486f-9a5c-287b0329c4cb"
},{

  "name": "Buritos with  chicken",
  "price": 10,
  "id": "241d9fcb-ab11-4722-9ee8-f69f49af058f"
},{

  "name": "Buritos spicy",
  "price": 11,
  "id": "8d002ae3-aca5-45b9-b077-8dbca15ce541"
},{

  "name": "Nachos super",
  "price": 12,
  "id": "a67f43f9-38aa-48de-a29f-3c7bafd41f78"
},{

  "name": "Nachos with chicken",
  "price": 11,
  "id": "9fbcf59f-68d5-4d5a-90da-d18dd28ef0df"
},{

  "name": "Nachos with guacamole",
  "price": 9,
  "id": "1e9aad8e-5daf-4a2c-a2fb-bcabd54089f4"
},{

  "name": "BBQ small",
  "price": 14,
  "id": "767ed0eb-84d3-463c-a32a-ca03fbd2a26a"
},{

  "name": "BBQ medium",
  "price": 16,
  "id": "d4bf9b04-a179-4453-a056-2e761bd698a1"
},{

  "name": "BBQ big",
  "price": 21,
  "id": "b82c5745-66f5-4e3f-89ea-d3dde0b6841f"
},{

  "name": "Carbonara small",
  "price": 15,
  "id": "f49bbabc-f820-4ffb-9768-4e2021f11f42"
},{
 
  "name": "Carbonara medium",
  "price": 17,
  "id": "7f61c4c6-e911-4884-b9c6-139aa4900ce9"
},{

  "name": "Carbonara big",
  "price": 23,
  "id": "6a34d061-8699-4d6f-ba6f-6ad831760c9c"
},{

  "name": "Pepperoni small",
  "price": 10,
  "id": "2300376b-8775-40d2-bb8d-80b6abc5787c"
},{

  "name": "Pepperoni medium",
  "price": 15,
  "id": "f732cd3c-8305-4a2e-b31e-689b340e5e78"
},{

  "name": "Pepperoni big",
  "price": 20,
  "id": "e38cd9b3-0b21-464c-bc3f-f9248f7f5505"
            }])
    }
    catch (e) {
        console.log(e)
    }
    finally {
        await client.close();
    }
}
start()