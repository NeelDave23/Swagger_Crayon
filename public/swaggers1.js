/**

* @swagger
* /getCompanyDetail:
*   get:
*     summary: Get Company Detail  Request
*     description: Get Company Detail  Request
*     tags: 
*       - Public
*     parameters:
*       - name: authorization
*         in: query
*         required: false
*         type: string
*       - name: company_id
*         in: query
*         required: true
*         type: integer
 
*     responses:
*      200:
*       description: Success
*       content:
*        application/json:
*         schema:
*           type: object
*           properties:
*             status:
*               type: string
*               default: success
*             data:
*               type: object
*               properties:
*                 company_id:
*                   type: integer
*                 name:
*                   type: string
*                 user_id:
*                   type: integer
*                 created_at:
*                   type: string
*                   format: date-time
*                 website:
*                   type: null
*                 logo:
*                   type: null
*                 description:
*                   type: null
*                 company_size:
*                   type: null
*                 company_type:
*                   type: null
*                 video:
*                   type: null
*                 employer_profile:
*                   type: object
*                   properties:
*                     user_id:
*                       type: integer
*                     town:
*                       type: object
*                       properties:
*                         name:
*                           type: string
*                         region_id:
*                           type: integer
*                         region:
*                           type: null
*                         country:
*                           type: object
*                           properties:
*                             name:
*                               type: string
*                             country_id:
*                               type: integer
*                 employer_industries:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       industry_id:
*                         type: integer
*                       industry:
*                         type: object
*                         properties:
*                           name:
*                             type: string
*                 company_users:
*                   type: array
*                   items:
*                     type: object
*                     properties:
*                       user_id:
*                         type: integer
*                 myTalentCount:
*                   type: integer
*                 TotalJobCount:
*                   type: integer
*                 ActiveJobCount:
*                   type: integer
*                 TotalUserCount:
*                   type: integer
*                 TotalUserShortlisted:
*                   type: integer
*                 TotalUserInterviewed:
*                   type: integer
*                 TotalUserHired:
*                   type: integer
*                 companyURL:
*                   type: string
*                 companyVideoURL:
*                   type: string
*                 followflag:
*                   type: boolean

*       400:
*         description: Bad Request.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   default: error
*                 message:
*                   type: string
*                   default: Message
*                 description:
*                   type: string
*                   default: Message Description
      
*/

/**
 * @swagger
 * /towns:
 *   get:
 *     summary: Get Towns Request
 *     description: Get Towns Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: country_id
 *         in: query
 *         required: false
 *         type: integer
 *       - name: lastKey
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         in: query
 *         required: false
 *         type: integer
 *       - name: title
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       town_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                       region_id:
 *                         type: integer
 *                       country_id:
 *                         type: integer
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Get Skills Request
 *     description: Get Skills Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: lastKey
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         in: query
 *         required: false
 *         type: integer
 *       - name: title
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       tag_id:
 *                         type: integer
 *                       tag:
 *                         type: string
 *                       approved:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /tools:
 *   get:
 *     summary: Get Skills Request
 *     description: Get Skills Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: lastKey
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         in: query
 *         required: false
 *         type: integer
 *       - name: title
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       tool_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       industry:
 *                         type: integer
 *                       approved:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /highestQual:
 *   get:
 *     summary: Get Highest Qualification  Request
 *     description: Get Highest Qualification  Request
 *     tags:
 *       - Public
  
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       highest_qualification_id:
 *                         type: integer
 *                       description:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /employer/allCompanies:
 *   get:
 *     summary: Get All Companies Request
 *     description: Get All Companies Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: limit
 *         in: query
 *         required: false
 *         type: integer
 *       - name: title
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       website:
 *                         type: integer
 *                       description:
 *                         type: integer

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /currencies:
 *   get:
 *     summary: Get Currencies  Request
 *     description: Get Currencies  Request
 *     tags:
 *       - Public
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       currency_id:
 *                         type: integer
 *                       currency:
 *                         type: string
 *                       symbol:
 *                         type: string
 *                       title:
 *                         type: string
 *                       min_salary:
 *                         type: integer
 *                       max_salary:
 *                         type: integer
 *                       min_rate:
 *                         type: integer
 *                       max_rate:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /employer/getCompanyType:
 *   get:
 *     summary: Get Company Type Request
 *     description: Get Company Type Request
 *     tags:
 *       - Public
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /employer/getCompanySize:
 *   get:
 *     summary: Get Company Size  Request
 *     description: Get Company Size  Request
 *     tags:
 *       - Public
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company_size_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get CountriesSkills Request
 *     description: Get CountriesSkills Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: lastKey
 *         in: query
 *         required: false
 *         type: integer
 *       - name: title
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       country_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       country_code_name:
 *                         type: string
 *                       country_code:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                 totalData:
 *                     type: integer
 *                 pageNumber:
 *                     type: integer      
 

 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /candidate/applywithoutlogin :
 *      post:
 *           summary: Candidate Apply without login Request
 *           description: Post Candidate Apply without login Request 
 *           tags:  
 *             - Public
 *           requestBody:
 *               required: true    
 *               content:
 *                    application/json:
 *                        schema:
 *                          type: object
 *                          properties:
 *                            data:
 *                                type: array
 *                                items:
 *                                  type: object
 *                                  properties:      
 *                                      question_id:
 *                                        type: integer
 *                                      answer:
 *                                        type: string
 *                            job_id:
 *                                type: integer
 

                                    

 *           responses:
 *                200:
 *                   description: Success
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: success
 *                               jobs_user_id: 
 *                                 type: integer
 *                               job_id:
 *                                  type: integer
                        
 *                400:
 *                   description: Bad Request.
 *                   content:
 *                      application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                               status:
 *                                 type: string
 *                                 default: error
 *                               message:
 *                                 type: string
 *                                 default: Message
 *                               description:
 *                                 type: string
 *                                 default: Message Description
 *                                              
  */

/**
 * @swagger
 * /company/companyhiring:
 *   get:
 *     summary: Get Company hiring Details Request
 *     description: Get Company hiring Details Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: limit
 *         in: query
 *         required: false
 *         type: integer
 *       - name: lastKey
 *         in: query
 *         required: false
 *         type: integer
 *       - name: authorization
 *         in: query
 *         required: false
 *         type: string
 *       - name: status
 *         in: query
 *         required: false
 *         type: string
 *       - name: company_size
 *         in: query
 *         required: false
 *         type: integer
 *       - name: company_type
 *         in: query
 *         required: false
 *         type: integer
 *       - name: industry_id
 *         in: query
 *         required: false
 *         type: integer
 *       - name: favourite
 *         in: query
 *         required: false
 *         type: string
 *       - name: applied_jobs
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       company_id:
 *                         type: integer
 *                       user_id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       website:
 *                         type: string
 *                       video:
 *                         type: null
 *                       description:
 *                         type: string
 *                       logo:
 *                         type: null
 *                       company_size:
 *                         type: string
 *                       company_type:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                       contact_no:
 *                         type: string
 *                       town:
 *                         type: string
 *                       country_id:
 *                         type: integer
 *                       country:
 *                         type: string
 *                       Industries:
 *                         type: string
 *                       CompanyFollowList:
 *                         type: null
 *                       CompanyFavouriteList:
 *                         type: string
 *                       totaljobs:
 *                         type: string
 *                       totalactivejobs:
 *                         type: string
 *                       profile_url:
 *                         type: string
 *                       video_url:
 *                         type: string
 *                       industry:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             industry_name:
 *                               type: string
 *                       followflag:
 *                         type: boolean
 *                       favouriteflag:
 *                         type: boolean
 *                       totalhiredjobs:
 *                         type: integer
 *                 pagenumber:
 *                   type: integer
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */

/**
 * @swagger
 * /candidate/camvideo:
 *   get:
 *     summary: Get Candidate camvideo  Request
 *     description: Get Candidate camvideo  Request
 *     tags:
 *       - Public
 *     parameters:
 *       - name: user_id
 *         in: query
 *         required: true
 *         type: integer
 
  
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: success
 *                 data:
 *                   type: object
 *                   properties:
 *                      cam_url:
 *                         type: string
  
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   default: error
 *                 message:
 *                   type: string
 *                   default: Message
 *                 description:
 *                   type: string
 *                   default: Message Description
 */
