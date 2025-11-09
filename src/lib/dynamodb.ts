//AWS import
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, GetCommand,QueryCommand} from "@aws-sdk/lib-dynamodb";
const dynamodbClient = new DynamoDBClient({
    region: 'ap-northeast-1',
});

const docClient = DynamoDBDocumentClient.from(dynamodbClient);

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