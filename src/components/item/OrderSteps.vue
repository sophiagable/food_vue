<template>
  <div class="order-steps container-fluid bg-light">
    <div class="container">
        <div id="wizard-progress">
            <ol class="step-indicator">
                <li class="complete">
                    <div class="step"><i class="material-icons">shopping_basket</i></div>
                    <div class="caption hidden-xs hidden-sm">Step 1: 選擇店家並<br>點選「我要開團」</div>
                </li>
                <li class="active" :class="{'active':step == 2,'complete':step !== 2 }">
                    <div class="step"><i class="material-icons">settings</i></div>
                    <div class="caption hidden-xs hidden-sm">Step 2: 團訂設置</div>
                </li>
                <li class="neutral" :class="{'active':step == 3 }">
                    <div class="step" ><i class="material-icons">share</i></div>
                    <div class="caption hidden-xs hidden-sm">Step 3: 產生網址與分享連結</div>
                </li>
            </ol>
        </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

    $wizard-color-neutral: var(--gray)!default;
    $wizard-color-active:  var(--info)!default;
    $wizard-color-complete:  var(--gray-dark)!default;
    $wizard-container-width: 100% !default;
    $wizard-step-width-height: 64px !default;
    $wizard-step-font-size: 24px !default;

    #wizard-progress {
        width: $wizard-container-width;
        margin: 20px auto 0 auto;
        font-family: Lato, Arial, sans-serif;
        .step-indicator {
            border-collapse: separate;
            display: table;
            margin-left: 0px;
            position: relative;
            table-layout: fixed;
            text-align: center;
            vertical-align: middle;
            padding-left: 0;
            li {
                display: table-cell;
                position: relative;
                float: none;
                padding: 0;
                width: 1%;
                
                &:after {
                    background-color: $wizard-color-neutral;
                    content: "";
                    display: block;
                    height: 5px;
                    position: absolute;
                    width: 100%;
                    top: $wizard-step-width-height/2;
                }
                
                &:after {
                    left: 50%;
                }
                
                &:last-child {
                    &:after {
                        display: none;
                    }
                }

            &.active {
                .step {
                    border-color: $wizard-color-active;
                    color: $wizard-color-active;
                }

                .caption {
                    color: $wizard-color-active;
                }
            }

            &.complete {
                &:after {
                    background-color: $wizard-color-complete;
                }
                .step {
                    border-color: $wizard-color-complete;
                    color: $wizard-color-complete;
                }
                .caption {
                    color: $wizard-color-complete;
                }
            }
            }

            .step {
                background-color: #fff;
                border-radius: 50%;
                border: 2px solid $wizard-color-neutral;
                color: $wizard-color-neutral;
                font-size: $wizard-step-font-size;
                height: $wizard-step-width-height;
                line-height: $wizard-step-width-height;
                margin: 0 auto;
                position: relative;
                width: $wizard-step-width-height;
                z-index: 1;
                i.material-icon{
                    position: absolute;
                    top: 29%;
                    left: 30%;
                }
                
                &:hover {
                    cursor: pointer;
                }
            }

            .caption {
                color: $wizard-color-neutral;
                padding: 11px 16px;
            }
        }
    }
    .order-steps{
        margin:0 auto;
        padding:10px;
        background: #FFF;

    }
</style>


<script>
    export default {
        name: "OrderSteps",
        data() {
            return {
                step:2
            };
        },
        watch: {
            $route:{
                handler(){
                    var vs = this;
                    var num = Number(vs.$route.params.stepId);
                    vs.step = num;
                },
                deep:true
            }

            
        },
    };
</script>


