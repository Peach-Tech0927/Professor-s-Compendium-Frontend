#AWSのDynamoDBにmockデータを入れるスクリプト
#手順1
#AWS CLIをインストール
#https://aws.amazon.com/jp/cli/

#手順2
#AWS CLIで認証情報を設定
#aws configure
#AWS Access Key ID [None]: <your_access_key>(IAMのアクセス管理、ユーザーからコピペ。ない場合は新規発行)
#AWS Secret Access Key [None]: <your_secret_key>(アクセスキーを発行したときにのみ表示されるPW、必ず控えておくこと)
#Default region name [None]: ap-northeast-1(固定)
#Default output format [None]: json(固定)

#手順3 
#boto3をインストール
#pip install boto3

#手順4
#mockデータがあるディレクトリ上でこれを実行してください
#python mock-into-AWS.py

import json
import boto3
import decimal
from pathlib import Path

TABLE_NAME = 'dev-professors-compendium'
MOCK_DATA_FILENAME = 'mock-db.json'

FILE_PATH = Path(__file__).resolve().parent / MOCK_DATA_FILENAME

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)


def put_items_dynamodb():
    put_item = convert_json_dict(FILE_PATH)

    try:
        with table.batch_writer() as batch:
            for item in put_item:
                batch.put_item(
                    Item=item
                )
        print(f"Successfully put {len(put_item)} items into {TABLE_NAME}")
    except Exception as e:
        print(f"An error occurred: {e}")


def convert_json_dict(json_file_name):
    with open(json_file_name, encoding='utf-8') as json_file:
        d = json.load(json_file, parse_float=decimal.Decimal)

    return d

if __name__ == "__main__":
    put_items_dynamodb()