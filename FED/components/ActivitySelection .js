import React, {useState}  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button, FlatList } from 'react-native';
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Goal from '../goal/Goal';
import ActivityButtonGroup from './ActivityButtonGroup '

const ActivitySelection = ({ navigation }) => {

    const getSessionGoals = () => {
        const sessionGoals = [ 
            { id: 1,
              serialNum: 1,
              title:  "1.תני לי x",
              description: "במהלך משחק משותף בחפצים או בפעילות אכילה \ הלבשה, כשירדן תקבל הוראה מילולית של 'תני לי X' עבור 8-10 אובייקטים ספציפיים, ירדן תיתן את האובייקט בליווי מבט. ירדן תיתן את האובייקטים בפעילויות עם שני מבוגרים שונים, לאורך 3 ימים עוקבים",
              skillType: "שפה רצפטיבית",
              subgoals: [
                {   id: 1.1,
                    serialNum: 1.1,
                    title: "1.1",
                    description: "ירדן נותנת 3-4 אובייקטים ללא מבט, עם סיוע של הושטת יד",
                    doneAt: "",
                  },
                {   id: 1.2,
                    serialNum: 1.2,
                    title: "1.2",
                    description: "ירדן נותנת 3-4 אובייקטים בליווי מבט, עם סיוע של הושטת יד + כניסה לטווח הראייה של המטפל",
                    doneAt: "",
                  }
              ],
              activities: [
                {   id: 1,
                    title: "בועות סבון",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: '#3333',
                },
                {   id: 2,
                    title: "צעצוע ישן",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
              ]
            },
            { id: 2,
              serialNum: 2,
              title:  "2. חפשי ותני לי את X",
              description: "במהלך משחק משותף בחפצים או בפעילות אכילה \ הלבשה, כשירדן תקבל הוראה מילולית של 'תני לי X' עבור 8-10 אובייקטים ספציפיים, ירדן תיתן את האובייקט בליווי מבט. ירדן תיתן את האובייקטים בפעילויות עם שני מבוגרים שונים, לאורך 3 ימים עוקבים",
              skillType: "שפה רצפטיבית",
              subgoals: [
                  {   id: 2.1,
                      serialNum: 2.1,
                      title: "2.1",
                      description: "ירדן נותנת 3-4 אובייקטים ללא מבט, עם סיוע של הושטת יד",
                      doneAt: "",
                  },
              ],
              activities: [
                {   id: 1,
                    title: "בועות סבון",
                    // title: "אמא",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן",
                    color: '#F5DBEC',
                },
                {   id: 4,
                    title: "צעצוע חדש",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
              ]
            },
            { id: 3,
              serialNum: 3,
              title:  "3. שיתוף בפעילות",
              description: "במהלך משחק משותף בחפצים או בפעילות אכילה \ הלבשה, כשירדן תקבל הוראה מילולית של 'תני לי X' עבור 8-10 אובייקטים ספציפיים, ירדן תיתן את האובייקט בליווי מבט. ירדן תיתן את האובייקטים בפעילויות עם שני מבוגרים שונים, לאורך 3 ימים עוקבים",
              skillType: "שפה רצפטיבית",
              subgoals: [
                  {   id: 3.1,
                      serialNum: 3.1,
                      title: "2.1",
                      description: "ירדן נותנת 3-4 אובייקטים ללא מבט, עם סיוע של הושטת יד",
                      doneAt: "",
                  },
              ],
              activities: [
                {   id: 1,
                    title: "בועות סבון",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                { id: 3,
                  title: "הרכבת פאזל",
                  description: "מציאת החלק המתאים של פאזל מגנטי",
                },
                {   id: 5,
                    title: "משחק בבובות",
                    description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
                },
                {   id: 4,
                  title: "צעצוע חדש",
                  description: "1. ללכוד בועה בודדת ולמקמה בין הפנים שלך לשל ירדן 2.'פוף', ירדן תפוצץ את הבועה עם  האצבע- קשר עין וצחוק משותף 3. לעצור מדי פעם ולהמתין ליוזמה של ירדן"
              },
              ],
            },
        ];
        return (sessionGoals);
    };
    const getRecommendedActivities = () => {
        const recommendedActivities = [
          { id: 1,
            title: "בועות סבון",
            description: "פוף!' ירדן תפוצץ בועה עם האצבע'"
          },
          { id: 3,
            title: "הרכבת פאזל",
            description: "מציאת החלק המתאים של פאזל מגנטי",
          },
          { id: 4,
            title: "צעצוע חדש",
            description: "משחק עם צעצוע חדש  פקפקפקפקפקפקפפקפקהההה"
          },
          { id: 5,
            title: "משחק בבובות",
            description: "עייפה בובה זהבה ועייף מאוד הדובבבבב",
          }
        ];
        return recommendedActivities.reverse();
    };
    const getRestOfSessionActivities = () => {
        const restOfSessionActivities = [
          { id: 3,
          name: "בנייה בקוביות",
          description: " חומה ומגדל חומה ומגדל חומה ומגדל לה. מריה מגדלנה יור דה קריצ'ר אוף דה נייט"
          },
          { id: 6,
          name: "מציאת חיסון לקורונה",
          description: "  כנסי כבר לבאטמוביל וניסע...קורונה ג'ננה שלום שלום ",
          },
        ];
        return restOfSessionActivities;
    };

    var sessionGoals = getSessionGoals();
    var recommendedActivities = getRecommendedActivities();
    const [goals, setGoals] = useState(getSessionGoals());

    const selectGoals = (id) => {
      console.log(id);
      setGoals(sessionGoals);
      setGoals(prevGoals => { 
        return (prevGoals.filter(goal => goal.activities.map(goalActivity => goalActivity.id).includes(id)));
      });
    };
    return (
      <View style={styles.container}>
        <View styles={styles.activityButtons}>
          <ActivityButtonGroup activities={getRecommendedActivities()} selectGoals={selectGoals} />
        </View>
        <View style={styles.goalsList}>
          <FlatList 
          data={goals}
          renderItem={({item}) => <Goal goal={item} />}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 8,
    },
    activityButtons: {
      flex: 1,
      backgroundColor: 'blue',
    },
    goalsList: {
        flex: 1,
        backgroundColor: 'wheat',
        paddingTop: 2,
    },
})

export default ActivitySelection;