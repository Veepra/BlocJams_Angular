/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Facts about Tamilnadu';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me facts about Tamilnadu, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
//=========================================================================================================================================
const data = [
    'The State of Tamil Nadu is the lies in the southern most part of India.',
    'It is surrounded by the Nilgiri, Eastern Ghats, the Anamalai Hills, Kerala, the Bay of Bengal, the Palk Strait, the Gulf of Mannar and the Indian Ocean.',
    'The total area of land of Tamil Nadu is 130,058 sq. km. Tamil Nadu ranks 11th position in area wise.',
    'Official as well as widely spoken language of Tamilnadu is Tamil.'
    'The charisma of the words “Lost City” always added a mysterious feel. Did you know that Tamil Nadu has a lost city too? Yes and the name of the city is Puhar.'
    'Chennai, formerly known as Madras, is Tamilnadu\'s Capital City. Also, Chennai is the largest city of the state.'
    'There are 32 districts present in Tamil Nadu.'
    'The famous tourist’s places in Tamil Nadu are Madras, Mahabalipuram, Kanchipuram, Pondicherry, and Madurai etc'
    'Widely celebrated festival in Tamil Nadu is Pongal or Tamizhar Thirunaal or Makar Sakranti. Other festivals also celebrated like Deapavali, Krishna Jayanthi, Eid-ul-Fitr, Good Friday etc.'
    'Most of the people in the State of Tamil Nadu practice Hinduism with a majority of 88.3%. Remaining others include Christianity, Islam etc.'
    'Bharat Natyan is the popular traditional dance of the state.'
    'Kolattam, Karagam, and Mayilattam are famous folk dances.'
    'AR Rahman or the Mozart of Madras, the Academy Award Winner, is also from Tamil Nadu.'
    'Viswanathan Anand origin of Tamil Nadu, is an Indian chess Grandmaster and former World Chess Champion.'
    'The Great Indian Mathematician Srinivasa Ramanujan who made significant contributions to mathematical analysis, number theory, and continued fractions was born in Erode,Tamil Nadu.'
    'Tamil is the first Indian Language to attain Classical Language Status'
    'Tamil Nadu is often referred to as ‘a land of temples’ and Tamils are proud of the religious traditions and follow them strictly.'
    'The World’s First Granite Temple is the Brihadeswara temple at Tanjavur in Tamil Nadu.'
    'the ancient Tamil society classified people based on geography --- Maravar (flatland inhabitants), Kuravar (mountain inhabitants) and Paravar (Coastal inhabitants) - Kallar is a community belonging to Maravars. Science also confirm the ancient antiguity of Tamil society and culture.'
    'Tamilnadu has Marina Beach which is the Second Longest Beach in the world'
    'Thirukural, which was written nearly two millennia ago portrays a universal outlook. This is evident as the author, Tiruvalluvar, does not mention his religion, land, or the audience for his work. He is often portrayed as a holy saint of Tamil Nadu today.'
    'Tamil is the first Indian Language to attain Classical Language Status.'
    'Tamil Nadu’s State sport is Khabaddi and it originated from Tamil Nadu ! Since the start of the Kabaddi World Cup, India has won all Kabaddi World titles.'
    'Tamil tradition dates the oldest works to several millennia ago; the earliest examples of Tamil writing we have today are in inscriptions from the 3rd century BC, which are written in an adapted form of the Brahmi script (Mahadevan, 2003). Archaeological evidence obtained from inscriptions excavated in 2005 dates the language to around 1000 BC.'
    'Carnatic music is the classical music form of Southern India. This is one of the world\'s oldest & richest musical traditions.The Trinity of Carnatic music Tyagaraja, Muthuswami Dikshitar and Syama Sastri were from Tamil Nadu.'
    'Tamil Nadu is also the second largest contributor to India’s GDP.'
    'Tamil Nadu has a good transport system that connects all over the Tamil Nadu via roadways, railways and airways. Chennai has the international airport but it has other airports in Salem, Tiruchirapally etc.'
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
