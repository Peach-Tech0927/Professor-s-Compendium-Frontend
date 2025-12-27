//AWS import
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

// デバッグ用ログ
console.log('DynamoDB環境変数チェック:', {
    hasDynamoDBAccessKey: !!process.env.DYNAMODB_ACCESS_KEY_ID,
    hasDynamoDBSecretKey: !!process.env.DYNAMODB_SECRET_ACCESS_KEY,
    hasAWSAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
    hasAWSSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.DYNAMODB_REGION || process.env.AWS_REGION || 'ap-northeast-1',
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('DYNAMO') || key.includes('AWS'))
});

const dynamodbClient = new DynamoDBClient({
    region: process.env.DYNAMODB_REGION || process.env.AWS_REGION || 'ap-northeast-1',
    credentials: process.env.DYNAMODB_ACCESS_KEY_ID && process.env.DYNAMODB_SECRET_ACCESS_KEY
        ? {
            accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
            secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
          }
        : undefined,
});

const docClient = DynamoDBDocumentClient.from(dynamodbClient);

export async function getBasicInfo(professorId: string) {
  const params = {
    TableName: 'dev-professors-compendium',
    IndexName: 'GSI1',
    KeyConditionExpression: 'SK = :sk', 
    ExpressionAttributeValues: {
      ':sk': `PROF#${professorId}`,
    },
    Limit: 1,
  };try {
    const command = new QueryCommand(params);
    const response = await docClient.send(command);
    return response.Items ? response.Items[0] : null;
  } catch (error) {
    console.error("DynamoDB (GSI Query) でエラー:", error);
    return null;
  }
}


export async function getDynamoDBItem(professorId: string, sk:string) {
  const params = {
    TableName: 'dev-professors-compendium',
    Key: {
      PK: `PROF#${professorId}`,
      SK: sk
    }
  };
  try {
    const command = new GetCommand(params);
    const response = await docClient.send(command);
    return response.Item;
  } catch (error) {
    console.error("DynamoDB (GetItem) でエラー:", error);
    return null;
  }
};

export async function queryDynamoDBItems(professorId: string, skPrefix: string) {
    const params = {
        TableName: 'dev-professors-compendium',
        KeyConditionExpression: 'PK = :pk AND begins_with(SK, :skPrefix)',
        ExpressionAttributeValues: {
            ':pk': `PROF#${professorId}`,
            ':skPrefix': skPrefix
        }
    };
    try {
        const command = new QueryCommand(params);
        const response = await docClient.send(command);
        return response.Items || [];
    } catch (error) {
        console.error("DynamoDB (Query) でエラー:", error);
        return [];
    }
};

export async function queryByPK(pk: string) {
  const params={
    TableName:'dev-professors-compendium',
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': pk
    }
  };

  try {
    const command = new QueryCommand(params);
    const response = await docClient.send(command);
    return response.Items;
  } catch (error) {
    console.error("DynamoDB (Query) でエラー:", error);
    return [];
  }
}
