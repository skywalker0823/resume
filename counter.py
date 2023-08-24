import json, boto3


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('resume_table')
def lambda_handler(event,context):
    # 抓取 id = 1 的資料
    response = table.get_item(Key={'id': '1'})
    views = response['Item']['views']
    # 更新 views
    views += 1
    print(views)
    response = table.put_item(Item={'id': '1', 'views': views})
    return views
    